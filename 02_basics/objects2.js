//TinderUser object
const tinderUser={}
tinderUser.id="123abc";
tinderUser.name="Amber";
tinderUser.age=21;
tinderUser.isLoggedin=false;
 
//RegularUSer object

const regularUser={
    email:"some@google.com",
    fullname: {
        firstname:"Amber",
        lastname:"Shakya"
    }
}
// console.log(regularUser.fullname);
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj3={...obj1,...obj2};
// console.log(obj3);

//Extracting key  of any object
console.log(Object.keys(obj1));
//Extracting  values of any object
console.log(Object.values(obj1));
//Extracting key-val pair of any object
console.log(Object.entries(obj3));
