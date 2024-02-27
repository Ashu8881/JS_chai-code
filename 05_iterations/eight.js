 const nums = [1,2,3,4]
 const print =nums.reduce( function (acc,curval) {
// console.log(` acc is ${acc} curval is ${curval}`)
    return acc + curval
 },799987)
// console.log(print)
const print2 = nums.reduce( (acc,curval ) => 
{
    // console.log(`acc is ${acc} and curval is ${curval} `); 
return acc+curval 
})
// console.log(print2)
const print3 = nums.reduce(   (acc,curval) => acc + curval ,0 )
// console.log(print3)




const shoppingCart = [
    { courseName: "Introduction to JavaScript", price: 49.99 },
    { courseName: "HTML and CSS Basics", price: 39.99 },
    { courseName: "Python Fundamentals", price: 59.99 },
    { courseName: "Java Programming", price: 69.99 },
    { courseName: "Data Science with R", price: 79.99 },
    { courseName: "Machine Learning Essentials", price: 89.99 }
];
const total = shoppingCart.reduce( ( acc,item ) => (acc+item.price),19)
console.log(Math.floor(total))
