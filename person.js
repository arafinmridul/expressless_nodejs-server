// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {
// })
// This is what Node does behind the scenes

console.log(__dirname, __filename);

class Person {
  constructor(userID, token) {
    this.userID = userID;
    this.token = token;
  }
  Auth() {
    console.log(`User ID is ${this.userID}! Token is ${this.token}`);
  }
}

module.exports = Person;
