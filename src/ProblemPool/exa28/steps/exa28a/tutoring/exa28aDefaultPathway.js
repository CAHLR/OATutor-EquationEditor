var hints = [{id: "exa28a-h1", type: "hint", dependencies: [], title: "Multiply", text: "Multiply the outside value with each of the inside parenthesis values", variabilization: {}}, {id: "exa28a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$-\\left(x^2\\right)$$"], dependencies: ["exa28a-h1"], title: "Multiply pt2", text: "What is -x times x?", variabilization: {}}, {id: "exa28a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10x"], dependencies: ["exa28a-h2"], title: "Multiply pt3", text: "What is -x times -10?", variabilization: {}}, {id: "exa28a-h4", type: "hint", dependencies: ["exa28a-h3"], title: "Combine", text: "Combine the values multiplied", variabilization: {}}, ]; export {hints};