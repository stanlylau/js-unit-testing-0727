
const { PlaintextToHtmlConverter } = require("./plaintext_to_html_converter.js")

const notifier = require("./notifier.js")
const fs = require('fs')

describe("Text Converter", () => {
  it("should foo", () => {
    const converter = new PlaintextToHtmlConverter()
    const result = converter.toHtml()
    expect(result).toEqual('abc<br />&lt;hello&gt;')
  });

  it("should foo", () => {
      

    const converter = axios.get.mockResolvedValue('test');
    const result = converter.toHtml()
    expect(result).toEqual('abc<br />&lt;hello&gt;')
  });
});