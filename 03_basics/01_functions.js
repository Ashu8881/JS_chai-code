function print(w) {
    console.log(w);
}
// print('a')
// print('b')
// print('c')
// print('d')
function addnumber(number1,number2){
    let result = number1 + number2
    // console.log(result)
    return result
    
}
const result =addnumber(5,7)
// console.log("result: ",result)
function loginuser( username = 'user'){
    if (username === undefined){
        console.log('please enter user name')
        return
    }
    console.log(`${username} logedin sucessfully `)
return 
}
// loginuser()
// loginuser('ashutosh')

//handle number with function and use of sprade operator



function calculateprice(val1,val2,...num1){
    return num1
}
console.log(calculateprice(3,300,343,34343,555))


// handle object with function and object de structring in obj
let user = {username:"ashutosh",
id:'ORISD1354394'}
function handleobj(anyobj){
    console.log(`nameof user ${anyobj.username}` )
    return
}
handleobj(user)


//handle array with functions 


let arr = [2,3,4,6,77,7889,34,30]

 function arrayhandler(getarr){
console.log(getarr[7],getarr[3],getarr[5])
 }
 arrayhandler(arr)