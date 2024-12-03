const MyNums = [1, 2, 3]

// const MyTotal = MyNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval

// }, 0)


const MyTotal = myNums.reduce((acc, curr) >= acc + curr, 0)

console.log(MyTotal);