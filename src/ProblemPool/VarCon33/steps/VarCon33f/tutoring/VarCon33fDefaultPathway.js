var hints = [{id: "VarCon33f-h1", type: "hint", dependencies: [], title: "Choosing side", text: "Choose a side to be the \"variable\" side and the other side will be the \"constant\" side. In this example, we choose the left side as the \"variable\" side.", variabilization: {}}, {id: "VarCon33f-h2", type: "hint", dependencies: ["VarCon33f-h1"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality.", variabilization: {}}, {id: "VarCon33f-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(5\\right) p+\\left(14\\right)=6$$"], dependencies: ["VarCon33f-h2"], title: "Subtraction", text: "Subtract 4p from each side.", variabilization: {}}, {id: "VarCon33f-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$5p=-8$$"], dependencies: ["VarCon33f-h3"], title: "Subtraction", text: "Subtract 14 from each side.", variabilization: {}}, {id: "VarCon33f-h5", type: "hint", dependencies: ["VarCon33f-h4"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality.", variabilization: {}}, {id: "VarCon33f-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$p=\\frac{-\\left(8\\right)}{5}$$"], dependencies: ["VarCon33f-h5"], title: "Division", text: "Divide 5 from each side.", variabilization: {}}, {id: "VarCon33f-h7", type: "hint", dependencies: ["VarCon33f-h6"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "VarCon33f-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["VarCon33f-h7"], title: "Verification", text: "Check whether $$\\left(9\\right) \\left(-\\frac{8}{5}\\right)+\\left(14\\right)$$ equals $$\\left(6\\right)+\\left(4\\right) \\left(-\\frac{8}{5}\\right)$$.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};