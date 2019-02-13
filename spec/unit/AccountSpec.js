describe('Account', function () {

const Account = require('../../src/Account')

let account;

  it('a new account has a default balance of 0', function() {
    account = new Account();
    expect(account.getBalance()).toEqual(0)
  });


  it('user can deposit money into account', function() {
    account = new Account();
    account.deposit(25)
    expect(account.getBalance()).toEqual(25);
  });

  it('user can withdraw money from account', function() {
    account = new Account();
    account.deposit(25)
    account.withdraw(20)
    expect(account.getBalance()).toEqual(5);
  });

});
