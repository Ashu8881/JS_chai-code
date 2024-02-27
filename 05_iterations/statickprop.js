class user {
  constructor(username, email, age) {
    this.username = username;
    this.email = email;
    this.age = age;
  }

    userId() {
    return Math.floor(Math.random() * 100);
  }

}

class addid extends user {
  constructor(username, email, age, userID) {
    super(username, email, age);
    this.userID = userID;
  }

}
const user1 = new user("ashutosh", "ashutosh@gmail.com", 25);

console.log(user1.userId());
console.log(user1);
