var hints = [{id: "a8b6b9fLinear29a-h1", type: "hint", dependencies: [], title: "Rewrite the Equation", text: "Write the original equation into the form $$a x=b$$, where a and b are some numbers", variabilization: {}}, {id: "a8b6b9fLinear29a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$-0.1x$$"], dependencies: [], title: "Subtraction", text: "What is $$0.4x-0.5x$$?", variabilization: {}}, {id: "a8b6b9fLinear29a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-1.8"], dependencies: [], title: "Subtraction", text: "What is -1.2-0.6?", variabilization: {}}, {id: "a8b6b9fLinear29a-h4", type: "hint", dependencies: ["a8b6b9fLinear29a-h3"], title: "Removing the Decimals", text: "To get rid of the decimals, multiply every term in the equation (-0.1*x=-1.8) by 100", variabilization: {}}, {id: "a8b6b9fLinear29a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-10"], dependencies: ["a8b6b9fLinear29a-h4"], title: "Multiplication", text: "What is $$-0.1\\times100$$?", variabilization: {}}, {id: "a8b6b9fLinear29a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-180"], dependencies: ["a8b6b9fLinear29a-h4"], title: "Multiplication", text: "What is $$-1.8\\times100$$?", variabilization: {}}, {id: "a8b6b9fLinear29a-h7", type: "hint", dependencies: ["a8b6b9fLinear29a-h6"], title: "Simplify", text: "Use algebra to maniputlate the equation into the form $$x=?$$, now that you have the equation $$-10x=-180$$", variabilization: {}}, {id: "a8b6b9fLinear29a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["18"], dependencies: ["a8b6b9fLinear29a-h5", "a8b6b9fLinear29a-h6"], title: "Division", text: "What is $$\\frac{-180}{-10}$$?", variabilization: {}}, ]; export {hints};