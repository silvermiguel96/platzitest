import { callbackHell} from '../callback'

describe('Test for Callback', () => {
  test('Callback', done => {
    function otherCallBack(data) {
      expect(data).toBe('Hello ..Javascript')
      done()
    }
    callbackHell(otherCallBack)
  })
})