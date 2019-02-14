describe('Transaction', () => {
  const Transaction = require('../../src/Transaction')

  let transaction;

  it('each transaction is dated', () => {
    const date = new Date();
    const transaction = new Transaction();

    expect(transaction).toEqual(date)
  });
});
