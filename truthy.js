// Truthy And Falsy values

const UserEmail = "ismailgaur17@gmail.com"
UserPassword = "Ismail123"

if (UserEmail) {
    console.log("Email is valid")
    console.log("password is strong")
} else {
    console.log("Email is not valid")
}

//Falsy Values
// False, 0 , even in -0 , BigInt on , null,k undefined, NAN(Not in number)


// Truthy Values
//"0", "False", "BigInt" , " "(All Strings are truthy values) , function(){}


//NULLISH coalescing Operator(??) : null undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1)
val1 = null ?? 10

console.log(val1)

var1 = undefined ?? 15 ?? 17
console.log(var1)

// Terniary Operator

// condition ? true : false
const iceaTeaPrice = 100
iceaTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")