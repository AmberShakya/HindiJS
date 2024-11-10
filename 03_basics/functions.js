function sayMyName(){
    console.log("Heisenberg");
    
}
// sayMyName();
function addTwonumbers(a,b){
    return a+b;
}
// console.log(addTwonumbers(1,2));
function UserLoggedIn(username="Aman"){
    return `${username} just logged in`
}
// console.log(UserLoggedIn());

//Rest operator(...)
function calculateValueCart(...num1){
    return num1;
}
const num2=calculateValueCart(10,20,30);
let value=0;
for (let index = 0; index < num2.length; index++) {
   value =value+num2[index];
    
}
// console.log(value);
//Handling user object
const user={
    username:"amber_op",
    profile:"student",
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and profile is ${anyobject.profile}`);
}
// handleObject({
//     username:"Amit",
//     profile:"Teacher"
// });


//SCOPE of variables
let a=9;
function myfun(){
    a=10;
    console.log(a);
}
// console.log(a);
// myfun(); 
//+++++++++++++++++ARROW FUNCTION++++++++++++++++++
const fun1=(num1,num2)=>console.log(num1+num2);
fun1(1,2);


