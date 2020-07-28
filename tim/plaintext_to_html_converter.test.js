const { PlaintextToHtmlConverter } = require("./plaintext_to_html_converter.js")
const fs = require('fs')
const notifier = require('./notifier')

jest.mock('fs')

describe("Text Converter", () => {

    const _htmlEncodingDone = 'HTML encoding done.'

    beforeEach(()=>{
        notifier.notify = jest.fn()
    })

    it("should foo", () => {
        fs.readFileSync.mockReturnValue('abc\n<hello>')

        const result = new PlaintextToHtmlConverter().toHtml()

        expect(notifier.notify).toHaveBeenCalledWith(_htmlEncodingDone)
        expect(result).toEqual('abc<br />&lt;hello&gt;')
    });

    it('change \\n to <br>', () => {
        fs.readFileSync.mockReturnValue('\n')

        const result = new PlaintextToHtmlConverter().toHtml()

        expect(notifier.notify).toHaveBeenCalledWith(_htmlEncodingDone)
        expect(result).toEqual('<br />')
    })

    it('change < to &lt;', () => {
        fs.readFileSync.mockReturnValue('<')

        const result = new PlaintextToHtmlConverter().toHtml()

        expect(notifier.notify).toHaveBeenCalledWith(_htmlEncodingDone)
        expect(result).toEqual('&lt;')
    })
});