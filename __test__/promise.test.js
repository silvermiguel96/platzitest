import { getDataFromApi } from '../promise'

describe('Testing Promise ', () => {
  test('Make a request to an API', done => {
    const api = 'https://rickandmortyapi.com/api/character'
    getDataFromApi(api).then(data => {
      // console.log(data)
      expect(data.results.length).toBeGreaterThan(0)
      done()
    })
  })
})