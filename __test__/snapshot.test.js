import { getCharacter } from '../snapshot'
import rick from '../rick.json'

describe('This time the snapshot', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot()
  })

  test('Forever fail snapshot', () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random() * 20),
    }
    expect(user).toMatchSnapshot()
  })

  test('has an exception within the code', () => {
    const user = {
      id : Math.floor( Math.random() * 20),
      name: "Miguelangel Rendon"
    }
    expect(user).toMatchSnapshot({
      id: expect.any(Number)
    })
  })
})