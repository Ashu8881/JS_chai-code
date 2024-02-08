const tinderUser = {}
 tinderUser.id = "234abc"
 tinderUser.name = "horneysibangi"
 tinderUser.login = false
//  console.log(tinderUser)
const regularuser ={
    email :"some@gmail.com",
    fullname :{
        userfullname:{
            firstname :"ashutosh",
            lastname :"panda"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname)
 const obj1 ={
    1:"a",
    2:"b"
 }
 const obj2 ={
    3:'c',
    4:'d'
 }

 const obj3 = Object.assign(obj1,obj2)
//  console.log(obj3)
 const obj4 = Object.assign({},obj1,obj2)
//  console.log(obj4)
 let obj5 = {...obj1,...obj2}
//  console.log(obj5)
 const user = [{
    user :1,
    email:'email1@gmail.com'
 },{
    user :2,
    email:'email2@gmail.com'
 },{
    user :3,
    email:'email3@gmail.com'
 },
]
// console.log(user[1].email)
// console.log(Object.keys(obj1));
// console.log(Object.values(obj2))
// console.log(Object.entries(obj3));
// console.log(obj4.hasOwnProperty('c'))
// console.log(obj4)
const course ={
   coursename :"js story",
   price :9999,
   courseinstructer:"Bob"
}
const {courseinstructer} = course
console.log(courseinstructer);
const {courseinstructer:inst} = course
console.log(inst);