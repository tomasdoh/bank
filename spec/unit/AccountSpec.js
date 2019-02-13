describe('Account', function () {

const Account = require('../../src/Account')

let account;

  it('a new account has a default balance of 0', function() {
    account = new Account();
    expect(account.balance).toEqual(0);
  });


  it('user can deposit money into account', function() {
    account = new Account();
    account.deposit(25)
    expect(account.balance).toEqual(25);
  });

});
