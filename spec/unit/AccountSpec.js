describe('Account', () => {
  const Account = require('../../src/Account');
  const Transaction = require('../../src/Transaction');
  const Statement = require('../../src/Statement');

  let account;

  beforeEach(() => {
    account = new Account();
  });

  it('a new account has a default balance of 0', () => {
    expect(account.getBalance()).toEqual(0);
  });

  it('user can deposit money into account', () => {
    account.deposit(25);
    expect(account.getBalance()).toEqual(25);
  });

  it('user can withdraw money from account', () => {
    account.deposit(25);
    account.withdraw(20);
    expect(account.getBalance()).toEqual(5);
  });

  describe('statement()', () => {
    it('has no transactions to begin with', () => {
      let statement = new Statement;
      let emptyStatement = statement.header();
      expect(account.statement()).toEqual(emptyStatement);
    })
  })

});
