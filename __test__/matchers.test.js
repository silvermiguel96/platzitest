describe('Commons comparators', () => {
  const user = {
    name: "Miguel",
    lastname: "Rendon"
  };
  const user2 = {
    name: "Miguel",
    lastname: "Rendon"
  };
  test('Equal elements', () => {
    expect(user).toEqual(user2)
  });
  test('Not equal elements', () => {
    expect(user).not.toEqual(user2)
  });
});