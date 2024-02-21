const nums= [1,2,3,4,5,0,6,7,8,9,10]
const arrnum =nums.map((i)=>{   return i*4})


console.log(arrnum)


const newnums = nums.
map((n)=>{return n*10})
.map((n)=>{ return n -1})



.filter((n) => {
    console.log("Current value being filtered:", n);
    if (n > 47) {
      return true;
    }
    return false;
  });

console.log(newnums);