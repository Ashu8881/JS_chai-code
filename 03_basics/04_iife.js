// immideately invoked function

function print(){
    console.log('ashutosh')

}
// print();


// (function printagain(){
    // named iifi
//     console.log('print again')
// })();

// its a unnamed iife 
(   ( name) =>{
    console.log(`running DB ${name}`)
}) ('ashutosh')