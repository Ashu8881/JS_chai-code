// console.log("code running");
let arr =[0,1,2,3,"four",true]
// console.log(arr[3]);
arr.push(5)
// console.log(arr);
arr.pop()
// console.log(arr);
arr.unshift(7)
// console.log(arr);
arr.shift()
// console.log(arr);
// console.log(arr.includes(8))
// console.log(`"index of one is "  ${arr.indexOf(2)}`)
// console.log(arr);



// splice and slice
const newarr= arr.slice(1,4)

console.log("slice operation",newarr)
console.log("splice operation" ,newarr.splice(1,4))
console.log(newarr)