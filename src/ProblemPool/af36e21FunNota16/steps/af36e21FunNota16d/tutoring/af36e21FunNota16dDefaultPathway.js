var hints = [{id: "af36e21FunNota16d-h1", type: "hint", dependencies: [], title: "Evaluating functions", text: "Given the equation for a function, we should replace the input variable in the equation with the value provided and then calculate the result.", variabilization: {}}, {id: "af36e21FunNota16d-h2", type: "hint", dependencies: ["af36e21FunNota16d-h1"], title: "Replacement", text: "Replace the variable x with a, and we get $$f(a)=-5a^2+2a-1$$.", variabilization: {}}, {id: "af36e21FunNota16d-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$5a^2-2a+1$$"], dependencies: ["af36e21FunNota16d-h2"], title: "Simplification", text: "Simplify the expression $$-\\left(-5a^2+2a-1\\right)$$. What do you get?", variabilization: {}}, ]; export {hints};