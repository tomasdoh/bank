describe('Statement', function () {
  const Statement = require('../../src/Statement')

  let statement;

  it('can print a header', () => {
    const statement = new Statement();
    expect(statement.header()).toEqual("date || credit || debit || balance")
  });
});
