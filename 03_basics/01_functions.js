function print(w) {
    console.log(w);
}
print('a')
print('b')
print('c')
print('d')
function addnumber(number1,number2){
    let result = number1 + number2
    console.log(result)
    return result
    
}
const result =addnumber(5,7)
console.log("result: ",result)
function loginuser( username = 'user'){
    if (username === undefined){
        console.log('please enter user name')
        return
    }
    console.log(`${username} logedin sucessfully `)
return 
}
loginuser()
// loginuser('ashutosh')