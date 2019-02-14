class Transaction {
  constructor() {
    this.date = new Date();
  }

  formattedDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  }
}

module.exports = Transaction;
