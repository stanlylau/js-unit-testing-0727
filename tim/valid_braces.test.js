const { validBraces } = require('./valid_braces')

describe('#validBraces', () => {
    it('should throw error when input is empty', () => {
        const input = ''

        expect(() => validBraces(input)).toThrow(new Error('Please provide an input'))
    })

    describe('#success cases', () => {
        describe('[] case', () => {
            test.each`
            input   
            ${'[]'} 
            ${'[[]]'} 
            `('should pass when input is $input', ({ input }) => {
                const result = validBraces(input)

                expect(result).toBeTruthy()
            })
        })

        describe('{} case', () => {
            test.each`
            input   
            ${'{}'} 
            ${'{{}}'} 
            `('should pass when input is $input', ({ input }) => {
                const result = validBraces(input)

                expect(result).toBeTruthy()
            })
        })

        describe('() case', () => {
            test.each`
            input   
            ${'()'} 
            ${'(())'}
            `('should pass when input is $input', ({ input }) => {
                const result = validBraces(input)

                expect(result).toBeTruthy()
            })
        })
    })

    describe('#fail cases', () => {
        describe('missing opening/closing bracket', () => {
            test.each`
            input  
            ${'['} 
            ${'{'} 
            ${'('} 
            ${']'} 
            ${'}'} 
            ${')'} 
            `('should fail when input is $input', ({ input }) => {
                const result = validBraces(input)

                expect(result).toBeFalsy()
            })
        })
    })
})