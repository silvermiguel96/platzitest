// After the check
afterEach( () => console.log('After the one check'))
afterAll( () => console.log('Alter the total test'))

// Before the check

beforeAll( () => console.log('Before the total test'))
beforeEach( () => console.log('Before the one test'))

describe(' Preparing  before the exercise ', () => {
  test('This true', () => {
    expect(0).toBeTruthy()
  })
})