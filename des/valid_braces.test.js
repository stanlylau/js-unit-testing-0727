const { validBraces } = require("./valid_braces")

describe("validBraces", () => {
    it('should throw error when input is empty', () => {
        expect(validBraces('')).toThrow(new Error('Please provide an input'))
    })

    it("should return true if input contains only [", () => {
        const result = validBraces('[')

        expect(result).toEqual(false)
    });

    it("should return true if input contains only {", () => {
        const result = validBraces('{')

        expect(result).toEqual(false)
    });

    it("should return true if input contains only (", () => {
        const result = validBraces('(')

        expect(result).toEqual(false)
    });

    it("should return false if input contains an equal amount of [ and ]", () => {
        const result = validBraces('[]')

        expect(result).toEqual(true)
    });

    it("should return false if input contains an equal amount of { and }", () => {
        const result = validBraces('{}')

        expect(result).toEqual(true)
    });

    it("should return false if input contains an equal amount of ( and )", () => {
        const result = validBraces('()')

        expect(result).toEqual(true)
    });
});