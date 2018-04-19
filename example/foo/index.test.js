describe('Description: ', () => {
  it('should contain 3 items', () => {
    expect(3).toBe(3);
  });

  it('should not work fine', () => {
    expect(false).toFalsy(true);
  });
});

test('Failing test',() => {
  expect(['foo', 'bar', 89]).toEqual(['foo', 'bar']);
})
