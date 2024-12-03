const Nums = [1,2,3,4,5,6]

// const Mycity= ["ddun", "SRE", "MZN"]
// console.log(Mycity)
console.log("A" , Nums)
// console.log( Nums.length)
// console.log(Nums[1])


// Arrays Methods

//FOR INSERTING ELEMNTS IN THE ARRAYS WE USE PUSH METHODS 

// Nums.push(8)
// Nums.push(12)
// Nums.push(72,3,1)

// console.log(Nums)

//FOR REMOVING ELEMNTS IN THE ARRAYS WE USE POP METHOD

// Nums.pop()
// console.log(Nums)


// Add elements in the Starting of the array

// Nums.unshift(88)
// console.log(Nums)


// IT REMOVE THE TGHE ELEMENTS
// Nums.shift()
// console.log(Nums)

//INCLUDES give us the boolean expressions

// console.log(Nums.includes(1))
// console.log(Nums.includes(100))
// console.log(Nums.indexOf(8))

//Slice-- it don't include the range
const NewArr= Nums.slice(1,4)
console.log(NewArr)
console.log("B", NewArr);
b
// console.log(Nums.slice(0,3))

//Splice- it include the range


const newArr2=  Nums.splice(1,4)
console.log("C" , newArr2)
// console.log(Nums.splice(0,3, 1,2,4))
