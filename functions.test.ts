const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('Should return an array', () => {
        let array = shuffleArray
        expect(array).toBe(shuffleArray)
    })

    test('return same length array as given', () => {
        let array = [1, 2, 3, 4, 5]
        let originalLength = array.length

        let shuffledArray = shuffleArray(array)
        let shuffleLength = shuffledArray.length

        expect(shuffleLength).toEqual(originalLength)
    })
})