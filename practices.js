// const arr=[]
const arr=[1,2,9,3,4,6]
// console.log(arr[0])
const last=arr[arr.length-1]
// console.log(last)
// arr.push(5)
// arr.pop()
// for(const i of arr){
//     console.log(i)
// }

// for(const key in arr){
//     console.log(arr[key])
// }
// arr.forEach((item)=>{
//     console.log(item)
// })


// arr.slice(0,1)
// console.log(`I have used slice${arr}`)

// arr.splice(0, 1, 9);

// console.log(`I have used splice${arr}`);
// const arr2=[1,2,4,5,6,[7,8,[9,[10]]]]
// const flatten=arr2.flat(3)
// const total=arr.concat(arr2)
// const total=[...arr,...arr2]
// console.log(arr);
// const ne=arr.filter((item)=>item >=2)
// const newAr=arr.map((item)=>console.log(item))
// const check=arr.indexOf(1)
// console.log(check)
// const frr=Array.from([2,3,4,5],(x)=>x+x)
// console.log(frr);
const fn=(a,b)=>{
    return a-b
}
const st=arr.sort(fn)

const red=arr.reduce((acc,curr)=>{
    return acc+curr
},0)
// console.log(st);

const numbers = [3, 1, 4, 1, 5];
const sorted = numbers.sort();
// numbers and sorted are both [1, 1, 3, 4, 5]
// sorted[0] = 10;
console.log(sorted); // 10


