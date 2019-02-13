'use strict';

describe('Account', function () {



  // beforeEach(function () {
  //   var account = new Account();
  // });

  it('the user can create a new account', function() {
    var account = new Account();
    expect(account).toBeDefined();
  });
})
