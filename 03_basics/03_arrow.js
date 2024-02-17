const user = {
    username : "ashutosh",
    price : 999,
    welcomemessage : function (){
        // console.log(`welcome to website ${this.username}`)
    }
}
// using this keyword reffers to the current context


user.welcomemessage()
user.username ="hitesh"
user.welcomemessage()
// console.log(this)



const arrow = (g,h) => {
    // console.log(g+h)
   let result =  (g+h)
  //  console.log(result)
   return result
}
arrow(6,9)
function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
  }
  
  const result = power(2, 3);
  // console.log(result)
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  
  const resultr = gcd(48, 18);
  // console.log(resultr)
  // const  chai  = function (){
  //   let username = 'ashutosh'
  //   console.log(this.username)
  // }


const chai = () =>{
  console.log('ashutosh')
}


  // chai()



  const add = (num1,num2) => {
    console.log(num1+num2)
  }
  // add(6,5)
  const addnum = (num1,num2) => {
    return num1+num2
  }
  addnum(3,4)