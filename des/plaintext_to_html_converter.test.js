const { PlaintextToHtmlConverter } = require("./plaintext_to_html_converter.js")
// const fs = require('fs')
const notifier = require("./notifier.js")
// jest.mock('fs')

xdescribe("Text Converter", () => {
  it("should foo", () => {
    const converter = new PlaintextToHtmlConverter()

    const result = converter.toHtml()

    expect(result).toEqual('abc<br />&lt;hello&gt;')
  });
});

xdescribe("Text Converter", () => {
  it("should replace all & with &amp;", () => {
    const data = `abc
                &hello&`
    const converter = new PlaintextToHtmlConverter()
    fs.readFileSync = jest.fn().mockReturnValueOnce(data);

    const result = converter.toHtml()

    expect(result).toEqual('abc<br />&amp;hello&amp;')
  });
});

describe("Text Converter", () => {
  it("should call notify when it is done", () => {
    const converter = new PlaintextToHtmlConverter()
    notifier.notify = jest.fn()
    converter.toHtml()
 
    expect(notifier.notify).toHaveBeenCalledTimes(1);
    expect(notifier.notify).toHaveBeenCalledWith('HTML encoding done.')
  });
});