// const coding = ["java", "python", "CPP"]

// const values = coding.forEach((item) => {
//     console.log(item)
//     return item

// })



// const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const NewNums = MyNums.filter((num) => num > 4)
// console.log(NewNums)



////Implicit return
// const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const NewNums = MyNums.filter((num) => {
//     return num > 4
// })
// console.log(NewNums)


//// ForEach
const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = []
MyNums.forEach((num) => {
    if (num > 5) {
        newNums.push(num)
    }
})
console.log(newNums);
