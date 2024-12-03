const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//It Multiply by 10
const NewNums = MyNums.map((num) => num * 10)
    //It add 2
    .map((num) => num + 2)
    .filter((num) => num >= 40)
console.log(NewNums)