const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('Should return an array', () => {
        let array = shuffleArray
        expect(array).toBe(shuffleArray)
    })

    test('Check that all items are the same in array', () => {
        let array = shuffleArray
        expect(array).toEqual(shuffleArray)
    })
})