// for of 

const arr =[2,3,4,5,6,7,8]
for (const num  of arr) {
    // console.log(num);
}
const string = 'Hello World!'
for (const str of string) {

    // console.log(str)
    if(str === ' '){
        break
    }
}

//Maps

const map = new Map()
map.set('in','india')
map.set('jp','japan')
console.log(map)
for (const [iterator,value] of map) {
    console.log(iterator,':',value)
}


