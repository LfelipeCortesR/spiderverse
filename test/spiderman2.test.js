const Spiderman= require('./../app/spiderman')
describe("Test Suite Dummy Description", () => {
    test('2) Use method getInfo()', () => {
    const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5 ,"Marvel")
    expect(tomHolland.getInfo()).toBe("Hey, I´m Tom Holland from Marvel studio")
    });
  })