
//symbol datatypes
const mySym=Symbol("key1")
//object literals

const JsUser={
    name:"Amber",
    age:21,
    [mySym]:"mykey1",
    location: "Sasaram",
    email:"amber@gmail.com",
    isloggedin:true
}
// console.log(JsUser.email); 
// console.log(JsUser[mySym]);
//Overwrite the object values
JsUser.email="amber1@gmail.com"
// console.log(JsUser);

JsUser.greetings=function() {
    console.log(`This is User : ${this.name}`);
}
console.log(JsUser.greetings());

