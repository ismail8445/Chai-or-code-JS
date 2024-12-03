// const tinderUser = new object()
const tinderUser = {};
tinderUser.id = "0221cse@gmail";
tinderUser.name = "aman";
tinderUser.isLogin = false;

console.log(tinderUser);

//Valuess in keys pairs format,, 1st is key and 2nd is value of the key
console.log(Object.entries(tinderUser))


//print alln the keys
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('islogin'));

// Object inside object


// const regularUser = {
//     email: "ismailgaur9283@#mail.com",
//     fullname: {
//         userfullname: {
//             firstName: "ismail",
//             lastname: "azeem Gaur"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstName)

//   MERGE TWO OBJECTS
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

// const obj4 = Object.assign(obj1, obj2, obj3)
const obj4 = { ...obj1, ...obj2, ...obj3 }
console.log(obj4)


