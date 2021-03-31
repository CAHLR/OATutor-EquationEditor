var hints = [{id: "poly5a-h1", type: "hint", dependencies: [], title: "Distributive Property", text: "The distributive property states that sum of the factor times each term in the sum is the product of a factor times a sum. So, we can rewrite the equation as the sum of the product of the first term in the first parentheses times the second parentheses plus the second term in the first parentheses time the second parentheses: $$\\left(2\\right) x \\left(\\left(3\\right) x^2-x-\\left(+4\\right)\\right)+\\left(1\\right) \\left(\\left(3\\right) x^2-x+\\left(4\\right)\\right)$$."}, {id: "poly5a-h2", type: "hint", dependencies: ["poly5a-h1"], title: "Multiplication", text: "The next step is to distribute the 2x. We do not need to distribute the 1 in the second expression since anything multiplied by 1 is itself. Remember: multiply the coefficients and add the exponents."}, {id: "poly5a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6x^3-2x^2+8x"], dependencies: ["poly5a-h1"], title: "Multiplication", text: "What is $$\\left(2\\right) x \\left(\\left(3\\right) x^2-x+\\left(4\\right)\\right)$$?"}, {id: "poly5a-h4", type: "hint", dependencies: ["poly5a-h3"], title: "Combine Like Terms", text: "Now we can combine like terms to simplify the expression. The $$x^3$$ and constant terms are in their simplest forms since there are no other like terms."}, {id: "poly5a-h5", type: "hint", dependencies: ["poly5a-h4"], title: "Combining $$x^2$$ Terms", text: "Since $$-\\left(2\\right) x^2$$ and $$\\left(3\\right) x^2$$ share $$x^2$$, these coefficients can be added to simplify the $$x^2$$ term."}, {id: "poly5a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x^2"], dependencies: ["poly5a-h4"], title: "Combining $$x^2$$ Terms", text: "What is $$-\\left(2\\right) x^2+\\left(3\\right) x^2$$?"}, {id: "poly5a-h7", type: "hint", dependencies: ["poly5a-h5", "poly5a-h6"], title: "Combining x Terms", text: "8x and -x are the only terms with x, so we can combine these terms by adding the coefficients"}, {id: "poly5a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7x"], dependencies: ["poly5a-h7"], title: "Combining x Terms", text: "What is 8x-x?"}, {id: "poly5a-h9", type: "hint", dependencies: ["poly5a-h8"], title: "Simplified Expression", text: "Since there are no more terms to simplify, we can write the expression as the sum of the simplified terms: $$\\left(6\\right) x^3+x^2+\\left(7\\right) x+\\left(4\\right)$$."}, ]; export {hints};