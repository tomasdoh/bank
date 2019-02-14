describe('Transaction', () => {
  const Transaction = require('../../src/Transaction')

  let transaction;

  it('each transaction is has a formatted date', () => {
    const date = new Date();
    const transaction = new Transaction();

    expect(transaction.formattedDate(date)).toEqual('14 / 2 / 2019')
  });
});
