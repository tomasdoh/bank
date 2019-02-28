const Statement = require('./Statement');

class Account {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  statement() {
    let statement = new Statement
    return statement.header()
  }
}

module.exports = Account;
