

// Object.create
const sym = Symbol("key1")
const JSuser ={
    name :"ashutosh",
    "full name" :"Ashutosh Panda",
   [sym]: "mykey1",
    age :27,
    address: "odisha",
    email: "008findme@gmail.com",
    islogin :false,
    lastlogined: ['monday',"satday"]
}
// console.log(JSuser)

// let arr = ["a","s"]
// console.log(JSuser.age)
// console.log(JSuser['email']);
// console.log(JSuser["full name"])
// console.log(typeof JSuser.sym)
// console.log(JSuser.sym)
// Object.freeze(JSuser)
JSuser.email ="myid@gmail.com"
// console.log(JSuser)
JSuser.greeting = function(){
    console.log("hii User")
}
JSuser.greetingTow = function(){
    console.log(`hii user ,${this.name}`)
}
// console.log(JSuser.greeting())
console.log(JSuser.greetingTow())