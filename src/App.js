import React  from 'react';
import './App.css';
import Cookies from 'universal-cookie';
import Platform from './ProblemLogic/Platform.js';
import DebugPlatform from './ProblemLogic/DebugPlatform.js';
import Firebase from "./ProblemLogic/Firebase.js";

import * as localForage from "localforage";

import {
  Route,
  HashRouter as Router,
  Switch
} from "react-router-dom";
import Notfound from "./notfound.js";

import {
  ThemeContext,
  siteVersion,
  logData,
  cookieID,
  debug,
  useBottomOutHints,
  autoCommands,
  autoOperatorNames,
  middlewareURL, PROGRESS_STORAGE_KEY,
} from './config/config.js';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// ### BEGIN CUSTOMIZABLE IMPORTS ###
import config from './config/firebaseConfig.js';
import skillModel from './config/skillModel.js';
import { bktParams as bktParams1 } from './config/bktParams/bktParams1.js';
import { bktParams as bktParams2 } from './config/bktParams/bktParams2.js';
import { heuristic as lowestHeuristic } from './config/problemSelectHeuristics/problemSelectHeuristic1.js';
import { heuristic as highestHeuristic } from './config/problemSelectHeuristics/problemSelectHeuristic2.js';
import parseJwt from "./util/parseJWT";
import AssignmentNotLinked from "./pages/AssignmentNotLinked";
import AssignmentAlreadyLinked from "./pages/AssignmentAlreadyLinked";
import SessionExpired from "./pages/SessionExpired";
// ### END CUSTOMIZABLE IMPORTS ###

try {
  const _config = require('./config/credentials-secret').default
  if (typeof _config === 'object') {
    Object.assign(config, _config)
  }
} catch (e) {
  // ignore
}

try {
  let _rawEnvConfig = process.env.REACT_APP_FIREBASE_CONFIG.trim();
  if (_rawEnvConfig.indexOf(":") !== -1) {
    // is probably in the format of "Secret value:eyJhcG........"
    _rawEnvConfig = _rawEnvConfig.substr(_rawEnvConfig.lastIndexOf(":") + 1).trim();
  }
  const _envConfig = JSON.parse(atob(_rawEnvConfig))
  if (process.env.REACT_APP_BUILD_TYPE === 'staging') {
    console.debug("Found env config: ", _envConfig, typeof _envConfig)
  }
  if (typeof _envConfig === 'object') {
    Object.assign(config, _envConfig)
  }
} catch (e) {
  // ignore
}

if (process.env.REACT_APP_BUILD_TYPE === 'staging') {
  console.debug("Final Firebase Config: ", config)
}

let theme = createTheme();
theme = responsiveFontSizes(theme);

const cookies = new Cookies();

const queryParamToContext = {
  "token": "jwt",
  "lis_person_name_full": "studentName"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    // UserID creation/loading
    if (!cookies.get(cookieID)) {
      let d = new Date();
      d.setTime(d.getTime() + (3 * 365 * 24 * 60 * 60 * 1000)); // 3 years in the future
      const id = Math.floor(Math.random() * 2 ** 16);
      cookies.set(cookieID, id, { path: "/", expires: d });
    }
    this.userID = cookies.get(cookieID);
    this.bktParams = this.getTreatment() === 0 ? bktParams1 : bktParams2;

    this.originalBktParams = JSON.parse(JSON.stringify(this.getTreatment() === 0 ? bktParams1 : bktParams2))

    this.state = {
      additionalContext: {}
    }

    const onLocationChange = () => {
      const additionalContext = {}
      const search = window.location.search
        || window.location.hash.substr(window.location.hash.indexOf("?") + 1)
      const sp = new URLSearchParams(search)

      Object.keys(queryParamToContext).forEach(qp => {
        const ctxKey = queryParamToContext[qp]
        const ctxValue = sp.get(qp);
        if(ctxValue !== null){
          additionalContext[ctxKey] = ctxValue
        }
      })

      if (additionalContext?.jwt) {
        const user = parseJwt(additionalContext.jwt)
        additionalContext['user'] = user
        additionalContext['studentName'] = user.full_name
      }
      if (this.mounted) {
        this.setState((prev) => ({
          additionalContext: {
            ...prev.additionalContext,
            ...additionalContext
          }
        }))
        window.history.replaceState({}, document.title, window.location.href.split("?")[0])
      } else if (this.mounted === undefined) {
        this.state = {
          ...this.state,
          additionalContext
        }
        window.history.replaceState({}, document.title, window.location.href.split("?")[0])
      }
    }
    window.addEventListener('popstate', onLocationChange);
    onLocationChange()

    this.saveProgress = this.saveProgress.bind(this)

    // Firebase creation
    this.firebase = null;
    if (logData) { //logData
      this.firebase = new Firebase(this.userID, config, this.getTreatment(), siteVersion);
    }
  }

  componentDidMount() {
    this.mounted = true
  }

  componentWillUnmount() {
    this.mounted = false
  }

  getTreatment = () => {
    return this.userID % 2;
  }

  removeProgress = async () => {
    await localForage.removeItem(PROGRESS_STORAGE_KEY)
    this.bktParams = this.getTreatment() === 0 ? bktParams1 : bktParams2
    window.location.reload();
  }

  saveProgress = () => {
    console.debug("saving progress");

    const progressedBktParams = Object.fromEntries(
      // only add to db if it is not the same as originally provided bkt params
      Object.entries(this.bktParams || {}).filter(([key, val]) => {
        // console.debug(this.originalBktParams[key]?.probMastery, 'vs.', val.probMastery)
        return this.originalBktParams[key]?.probMastery !== val.probMastery
      })
    )
    localForage.setItem(PROGRESS_STORAGE_KEY, progressedBktParams, (err) => {
      if (err) {
        console.debug('save progress error: ', err)
        toast.warn('Unable to save mastery progress :(', {
          toastId: 'unable_to_save_progress'
        })
      } else {
        console.debug('saved progress successfully')
      }
    }).then(_ => {
    });
  }

  loadProgress = async () => {
    const progress = await localForage.getItem(PROGRESS_STORAGE_KEY).catch(_e => {
      console.debug('error with getting previous progress', _e)
    });
    if (progress == null || typeof progress !== 'object' || Object.keys(progress).length === 0) {
      console.debug('resetting progress... obtained progress was invalid: ', progress)
      this.bktParams = this.getTreatment() === 0 ? bktParams1 : bktParams2
    } else {
      console.debug('restoring progress from before', progress)
      Object.assign(this.bktParams, progress)
    }
  }

  render() {
    console.debug('this state', this.state)
    return (
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{
          siteVersion,
          userID: this.userID,
          firebase: this.firebase,
          logData,
          getTreatment: this.getTreatment,
          bktParams: this.bktParams,
          heuristic: this.getTreatment() === 0 ? lowestHeuristic : highestHeuristic,
          hintPathway: this.getTreatment() === 0 ? "DefaultPathway" : "DefaultPathway",
          skillModel,
          credentials: config,
          debug,
          useBottomOutHints,
          autoCommands,
          autoOperatorNames,
          studentName: '',
          middlewareURL,
          jwt: '',
          user: {},
          problemIDs: null,
          ...this.state.additionalContext
        }}>
          <Router>
            <div className="Router">
              <Switch>
                <Route exact path="/" render={(props) => (
                  <Platform key={Date.now()} saveProgress={() => this.saveProgress()} loadProgress={this.loadProgress}
                            removeProgress={this.removeProgress} {...props} />
                )}/>
                <Route path="/courses/:courseNum" render={(props) => (
                  <Platform key={Date.now()} saveProgress={() => this.saveProgress()} loadProgress={this.loadProgress}
                            removeProgress={this.removeProgress} courseNum={props.match.params.courseNum} {...props} />
                )}/>
                <Route path="/lessons/:lessonNum" render={(props) => (
                  <Platform key={Date.now()} saveProgress={() => this.saveProgress()} loadProgress={this.loadProgress}
                            removeProgress={this.removeProgress} lessonNum={props.match.params.lessonNum} {...props} />
                )}/>
                <Route path="/debug/:problemID" render={(props) => (
                  <DebugPlatform key={Date.now()} saveProgress={() => this.saveProgress()}
                                 loadProgress={this.loadProgress}
                                 removeProgress={this.removeProgress}
                                 problemID={props.match.params.problemID} {...props} />
                )}/>
                <Route exact path="/assignment-not-linked" render={(props) => (
                  <AssignmentNotLinked key={Date.now()} {...props} />
                )}/>
                <Route exact path="/assignment-already-linked" render={(props) => (
                  <AssignmentAlreadyLinked key={Date.now()} {...props} />
                )}/>
                <Route exact path="/session-expired" render={(props) => (
                  <SessionExpired key={Date.now()} {...props} />
                )}/>
                <Route component={Notfound}/>
              </Switch>
            </div>
          </Router>
          <ToastContainer
            autoClose={false}
            closeOnClick={false}
          />
        </ThemeContext.Provider>
      </ThemeProvider>
    );
  }
}

export default App;