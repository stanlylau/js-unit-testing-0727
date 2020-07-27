const { PlaintextToHtmlConverter } = require("./plaintext_to_html_converter.js")

describe("Text Converter", () => {
  it("should foo", () => {
    const converter = new PlaintextToHtmlConverter()
    const result = converter.toHtml()
    expect(result).toEqual('abc<br />&lt;hello&gt;')
  });
});