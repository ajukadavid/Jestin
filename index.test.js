const fizzBuzz = require('./index.js')


describe('fizzes', () => {
    describe('accurate fizz', () => {
        test.each`
        
        input  | expected
        ${3}      ${'Fizz'}
        
        `('$input', ({input, expected}) => {
            const result = fizzBuzz(input)
            expect(result).toEqual(expected)
        })
    })

})