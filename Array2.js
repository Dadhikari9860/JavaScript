const marvel_heros=["thor","Ironman","spiderman"]
const dc=["superman","flash","batman"]
// marvel_heros.push(dc)
// console.log(marvel_heros)
// const newA=marvel_heros.concat(dc)
const newA=[...marvel_heros,...dc]
const another_array=[1,2,3,[4,5],6,[7,8,[4,5]]]
const real_another=another_array.flat(Infinity)
console.log(real_another);

// console.log((Array.isArray("hitesh")))
console.log((Array.from("hitesh")))
// console.log((Array.from({name:"dinesh"})))  //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))