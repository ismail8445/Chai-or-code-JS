//NUMBER

const score= 4000

const balance= new Number(100)
console.log(balance)


// 1.For convert  into string and find the length
console.log(balance.toString().length)


// 2. For Decimal value
console.log(balance.toFixed(2))


// 3. for precesion values
const otherNumber= 23.8497
console.log(otherNumber.toPrecision(2))


//4. use commas between values
 const hundreds =10000000000
 console.log(hundreds.toLocaleString())

// 5. indian number system
console.log(hundreds.toLocaleString('en-IN'))
  

// MATH

// 1.give the absalute values
console.log(Math)
console.log(Math.abs(-23))

//2 . round values 
console.log(Math.round(3.01))
console.log(Math.round(3.76))

// Give top value
console.log(Math.ceil(4.2))

//floor value)
console.log(Math.floor(2.5))

//Find min value
console.log(Math.min(3,56,76,43,1,34))


//find max value
console.log(Math.max(13,4,56,7,765,433))

// random values

console.log(Math.random())
console.log(Math.random()* 10)
console.log((Math.random()*10)+ 1)

