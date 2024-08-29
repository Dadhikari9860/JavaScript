// singleton
// Object.create

//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"dinesh",
    "full name":"dinesh adhikari",
   [mySym]:"myKey1",
    age:25,
    location:"ktm",
    email:"dinesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

// console.log(JsUser.name)
// // console.log(JsUser["name"])
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
JsUser.name="deenesh"
// Object.freeze(JsUser)
JsUser.name="nirpa"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user")
}
JsUser.greeting2=function(){
    console.log(`hello js user ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())



