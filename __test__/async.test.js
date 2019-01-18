import { getDataFromApi }  from '../promise'

describe('Testing async/await ', () => {
  test('Make a requeset for the APi', async () => {
    const api = 'https://rickandmortyapi.com/api/character'
    
    await getDataFromApi(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0)
    })   
  })
  test('Testing Api for Id', async () => {
    const apiRick = 'https://rickandmortyapi.com/api/character/1'
    
    await getDataFromApi(apiRick).then(data => {
      expect(data.name).toEqual('Rick Sanchez')
    })
  })

  test('Creating promiset not Then', async () => {
    const apiRick = 'https://rickandmortyapi.com/api/character/1'

    const dataRick = await getDataFromApi(apiRick) 
    expect(dataRick.name).toEqual('Rick Sanchez')
  })
  
})