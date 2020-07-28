const {validBraces }= require("./valid_braces.js")

describe("Valid Brace", () => {
  it("without enclosing brace", () => {
    //   const input = '[' // arrange
    //   const result = validBraces(input) // act
    // expect(result).toBeFalsey() // assert
    
    // expect(validBraces('[')).toBeFalsey()
    // expect(validBraces('{')).toBeFalsey()
  });

  // long long time ago, "You can only have one assert in the test"
  // one assert -> assert one concept

  it("single complete brace", () => {
    expect(validBraces('[]')).toEqual(true)
  });

  it("multiple complete braces", () => {
    expect(validBraces('{}()')).toEqual(true)
  });

  it("multiple nested complete braces", () => {
    const valid = validBraces('{{[]}}')
    expect(true).toEqual(valid)
    
  });

  it("validate {{[", () => {
    const valid = validBraces('{{[')
    expect(false).toEqual(valid)
    
  });

});