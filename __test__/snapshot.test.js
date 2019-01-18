import { getCharacter } from '../snapshot'
import rick from '../rick.json'

describe('This time the snapshot', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot()
  })
})