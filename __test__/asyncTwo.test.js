import { getDataFromApi } from '../promise'

describe('Aplication for async / await', () => {
  test('Https://httpstat.us/404' , async () => {
    const apiError404 = 'https://httpstat.us/404'
    const peticion =   getDataFromApi(apiError404)
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'))
  })
  test('Resolver The Hello!', async () => {
    await expect(Promise.resolve('Say Hello')).resolves.toBe('Say Hello')
    await expect(Promise.reject('Error')).rejects.toBe('Error')
  })
})