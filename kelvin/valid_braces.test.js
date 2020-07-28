const { validBraces } = require("./valid_braces")

describe("Valid Braces", () => {
   it('should throw error when input is empty', () => {
        const input = ''

        expect(() => validBraces(input)).toThrow(new Error('Please provide an input'))
    })

});