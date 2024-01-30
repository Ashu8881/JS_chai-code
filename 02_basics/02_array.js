const heros =["thor","ironman","spiderman"]
const dc =["superman","flash","batman"]
// let newarr= heros.push(dc)
// console.log(heros);
// console.log(dc);
// console.log(newarr)
// console.log(heros[3][2])
const allhero = heros.concat(dc)
// console.log(heros);
// console.log(allhero)
const sprheros = [...heros,...dc]
console.log(sprheros)
const another_array = [1, 2, 3, [4, 5, 6], 7,
[6, 7,
4, 5]]
const real_array = another_array.flat(Infinity)
console.log(real_array)
console.log(Array.isArray("Ashutosh"))
console.log(Array.from("ashutosh"));
console.log(Array.from({name:"ashutosh"}))
let data1 = 400
let data2= 500
let data3=600
let data4 =700
console.log(Array.of(data1,data2,data3,data4))