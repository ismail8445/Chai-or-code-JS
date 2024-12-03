
function MyName() {
    console.log("ismail ")

}
MyName()

//otherFuntion

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)

}
addTwoNumbers(3, 62)
addTwoNumbers(3, "62")
addTwoNumbers(3, 62)


function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(3, 5)
console.log("Result:", result)


function loginUserMessage(username) {
    if (username == undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage());

