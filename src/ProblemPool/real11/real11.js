import React from 'react'; import { InlineMath } from 'react-katex';import steps from "./real11-index.js"; const problem = {id: "real11", title: "Using a Formula", body: "@{person} has a right circular cylinder with radius r and height h has the surface area S (in square units) given by the formula S=2πr(r+h). \n##figure1.gif##", steps: steps, 
variabilization: {
    person: ["Alice", "Bob"]
}}; export { problem };