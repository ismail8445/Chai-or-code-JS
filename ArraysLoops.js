// const arr = [1, 2, 3, 4, 6, 7]

// for (const num of object) {
//     console.log(num);
// }

// const greetings = "hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }


// const map = new Map()
// map.set('Ddun', " Uk")
// map.set('Sre', "UP")
// map.set('Manali', " HP")
// map.set('Karnal', " HR")


// for (const [key, value] of map) {
//     console.log(map)
// }



// const myObject = {
//     name: "Ddun",
//     name2: "Sre",
//     name3: "Delhi"
// }
// for (const [key] of Myobject) {
//     console.log(key)
// }


const Myobject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in Myobject) {
    console.log(Myobject[key])
}