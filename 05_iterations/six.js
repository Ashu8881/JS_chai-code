const coding =['js','pythan','cpp','pythan','ruby']


const value=coding.forEach((i)=>{
// console.log(i)
})
// console.log(value);

const nums= [1,2,3,4,5,,6,7,8,9,10]
const numsarr= nums.filter((i)=> 

{   return i >4  }

)
// console.log(numsarr)



const numretarr =[ ]
nums.forEach( (i) => {
if (i> 4){
    numretarr.push(i+1)
}
})
// console.log(numretarr)



const books = [
    {
      name: "1984",
      genre: "Dystopian Fiction",
      publisher: "Secker & Warburg",
      publishing_year: 1949,
      edition_year: 1949
    },
    {
      name: "To Kill a Mockingbird",
      genre: "Southern Gothic",
      publisher: "J. B. Lippincott & Co.",
      publishing_year: 1960,
      edition_year: 1960
    },
    {
      name: "The Great Gatsby",
      genre: "Tragedy, Jazz Age",
      publisher: "Charles Scribner's Sons",
      publishing_year: 1925,
      edition_year: 1925
    },
    {
      name: "Pride and Prejudice",
      genre: "Romantic Novel",
      publisher: "T. Egerton, Whitehall",
      publishing_year: 1813,
      edition_year: 1813
    }
    // Add more books as needed
  ];
   const userbooks = books.filter((bk)=> bk.publishing_year >1900)
   console.log(userbooks)