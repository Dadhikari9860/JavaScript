function sayMyName(){
    console.log("My name is John");
}

// sayMyName()


// function addTwoNumbers(num1,num2){
//  return console.log(num1 + num2);  

// }

function addTwoNumbers(num1, num2) {
  return num1 + num2
}
const result=addTwoNumbers(2,3)

// console.log(result)

function loginUserMessage(username="din"){
    if(!username){
console.log("please enter a username")
return
    }
return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())