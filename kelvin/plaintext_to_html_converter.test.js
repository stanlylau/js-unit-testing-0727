const { PlaintextToHtmlConverter } = require("./plaintext_to_html_converter.js")
const fs = require('fs')
const notifier = require("./notifier.js")

jest.mock('fs')
jest.mock('./notifier')

describe("Text Converter", () => {
  it("should foo", () => {
    const converter = new PlaintextToHtmlConverter()
    const result = converter.toHtml()
    expect(result).toEqual('abc<br />&lt;hello&gt;')
  });

   it("encode & ", () => {
         fs.readFileSync.mockReturnValue('a&')
        const converter = new PlaintextToHtmlConverter()

        const result = converter.toHtml()
   
    expect(notifier.notify).toHaveBeenCalledTimes(1);
    expect(result).toEqual('a&amp;')
  });
});