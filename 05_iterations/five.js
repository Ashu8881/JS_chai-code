const coding =['js','pythan','cpp','pythan','ruby']
coding.forEach( function (item){
// console.log(item)
})
// coding.forEach( (value) => {console.log(value)})
function printme(item){
    console.log(item)
}
// coding.forEach(printme)


// foreach returns item,index,array

coding.forEach((item,index,array)=>{
    console.log(item,index,array)
})
const languages = [
    {
      name: "JavaScript",
      type: "interpreted",
      designed_by: ["Brendan Eich"],
      year_created: 1995,
      website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      name: "Python",
      type: "interpreted",
      designed_by: ["Guido van Rossum"],
      year_created: 1991,
      website: "https://www.python.org/"
    },
    {
      name: "Java",
      type: "compiled and interpreted",
      designed_by: ["James Gosling"],
      year_created: 1995,
      website: "https://www.java.com/"
    },
    {
      name: "C++",
      type: "compiled",
      designed_by: ["Bjarne Stroustrup"],
      year_created: 1985,
      website: "https://isocpp.org/"
    }
    // Add more languages as needed
  ];
  

  languages.forEach( (item)=>{
console.log(item.name)
console.log(item.type)
console.table(item.name)
  })