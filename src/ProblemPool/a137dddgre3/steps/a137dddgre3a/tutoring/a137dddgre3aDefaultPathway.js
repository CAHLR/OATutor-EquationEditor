var hints = [{id: "a137dddgre3a-h1", type: "hint", dependencies: [], title: "Factor into Primes", text: "Factor each coefficient into primes. A prime number is a counting number greater than 1, whose only factors are 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 13, etc.", variabilization: {}}, {id: "a137dddgre3a-h2", type: "hint", dependencies: ["a137dddgre3a-h1"], title: "Factor First Number", text: "$$24=\\left(6\\right) \\left(4\\right)$$ $$24=\\left(3\\right) \\left(2\\right) \\left(2\\right) \\left(2\\right)$$", variabilization: {}}, {id: "a137dddgre3a-h3", type: "hint", dependencies: ["a137dddgre3a-h2"], title: "Factor Second Number", text: "$$40=\\left(4\\right) \\left(10\\right)$$ $$40=\\left(2\\right) \\left(2\\right) \\left(5\\right) \\left(2\\right)$$", variabilization: {}}, {id: "a137dddgre3a-h4", type: "hint", dependencies: ["a137dddgre3a-h2", "a137dddgre3a-h3"], title: "Identify Common Factors in each Column", text: "$$24=\\left(3\\right) \\left(2\\right) \\left(2\\right) \\left(2\\right)$$ $$40=\\left(2\\right) \\left(2\\right) \\left(5\\right) \\left(2\\right)$$ 2, 2, and 2 are shared by both numbers.", variabilization: {}}, {id: "a137dddgre3a-h5", type: "hint", dependencies: ["a137dddgre3a-h4"], title: "Multiply Common Factors", text: "Bring down the 2, 2 and 2, and then multiply. $$GCF=\\left(2\\right) \\left(2\\right) \\left(2\\right)$$", variabilization: {}}, {id: "a137dddgre3a-h6", type: "hint", dependencies: ["a137dddgre3a-h5"], title: "Multiply Common Factors", text: "$$GCF=8$$", variabilization: {}}, ]; export {hints};