function setusername (username){
this.username = username;
}

function printusername (username,userId,email){

    setusername.call(this,username)
this.email =email,
this.userId = userId
}



printusername = new printusername('sasi','3e327e32','008findme@gmail.com')
console.log(printusername)