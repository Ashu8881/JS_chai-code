class user{
    constructor(username,email,password){
this.username = username;
this.email = email;
this.password = password;
    }
  get userId(){
    return this.username.toUpperCase()
  }
set userId(value){
    this.username = value.toLowerCase()
}
}

const ashu = new user('ashutosh','ashutosh@gmail.com','123456')
console.log(ashu.userId)