//Rest method
function calculateCartPrice(...num1) {
    return num1

}
console.log(calculateCartPrice(20, 2344, 535, 243))

// print only values
function CalculatePrice(value1, value2, ...num2) {
    return num2
}
console.log(CalculatePrice(135, 7173, 53534, 235, 254, 25436))


//

const user = {
    username: "ismail",
    price: 199
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//values and input change of the object
handleObject({
    username: "abhay",
    price: 399
});

// Get values from an array
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))             