describe('Checking string the text', () => {

  const text = 'a nice text'
  test('Has contain the  next text (nice)', () =>{
    expect(text).toMatch(/nice/)
  })
  test('Has not contain in the text (beautiful)', () => {
    expect(text).not.toMatch(/beautiful/)
  })
  test('Checking size the text', () => {
    expect(text).toHaveLength(11)
  })
})