const user = {
  username: "dinesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this)
  }

};
//  user.welcomeMessage()

// user.username="nirpa"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username="dinesh"
//     console.log(this.username)
// }

// chai()

const chai=()=>{
    let username="dinesh"
    console.log(this)
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1 + num2
// } explecit return

// const addTwo = (num1, num2) => num1 + num2;//implecite return

console.log(addTwo(3,3))