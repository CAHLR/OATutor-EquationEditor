var hints = [{id: "a6014eaSubAdd17a-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "a6014eaSubAdd17a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x+\\left(24\\right)-\\left(24\\right)=35-24$$"], dependencies: ["a6014eaSubAdd17a-h1"], title: "Subtraction", text: "Subtract 24 from each side.", variabilization: {}}, {id: "a6014eaSubAdd17a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=11$$"], dependencies: ["a6014eaSubAdd17a-h2"], title: "Simplification", text: "Simplify the equation.", variabilization: {}}, {id: "a6014eaSubAdd17a-h4", type: "hint", dependencies: ["a6014eaSubAdd17a-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a6014eaSubAdd17a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a6014eaSubAdd17a-h4"], title: "Verification", text: "Check whether $$\\left(11\\right)+\\left(24\\right)$$ equals 35.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};