const { arrayFruits, arrayColors } = require('../array')

describe('We will check that theres is an element', () => {
  test('Contains a banana', () => {
    expect(arrayFruits()).toContain('Banana')
  })
  test('Not contains a banana', () => {
    expect(arrayFruits()).not.toContain('Platano')
  })
  test('Checking size in the array', () => {
    expect(arrayColors()).toHaveLength(5)
  })
})
