var hints = [{id: "a41316cmatrices28a-h1", type: "hint", dependencies: [], title: "Detemine if Multipliable", text: "Two matrices are Multipliable(able to be multiplied) if their inner dimensions are the same. Since B is 2x2 and A is 2x2, the matrices can be multiplied.", variabilization: {}}, {id: "a41316cmatrices28a-h2", type: "hint", dependencies: ["a41316cmatrices28a-h1"], title: "Following the Algorithm", text: "Follow the algorithm for multiplying matrices to get the final matrix.", variabilization: {}}, {id: "a41316cmatrices28a-h3", type: "hint", dependencies: ["a41316cmatrices28a-h2"], title: "Matrix Operations", text: "The operations for multiplying the matrices are as follows: $$\\begin{bmatrix} 40\\times-10+10\\times5 & 40\\times20+10\\times25 \\\\ -20\\times-10+30\\times5 & -20\\times20+30\\times25 \\end{bmatrix}$$", variabilization: {}}, {id: "a41316cmatrices28a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\begin{bmatrix} -350 & 1050 \\\\ 350 & 350 \\end{bmatrix}$$"], dependencies: ["a41316cmatrices28a-h3"], title: "Simplify", text: "Simplify these operations: $$\\begin{bmatrix} 40\\times-10+10\\times5 & 40\\times20+10\\times25 \\\\ -20\\times-10+30\\times5 & -20\\times20+30\\times25 \\end{bmatrix}$$. What do you get as your final answer?", variabilization: {}}, ]; export {hints};