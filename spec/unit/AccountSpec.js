describe('Account', function () {

const Account = require('../../src/Account')

let account;

  it('a new account has a default balance of 0', function() {
    account = new Account();
    expect(account.balance).toEqual(0);
  });
});
