//             0           1       2     3
let names = ["chinmay","shirish","ram","ravi"]
console.log(names[0])
console.log(names[1])
console.log(names.length)

// let a = names.length
// console.log(a)
// console.log(typeof a)

//              0  1 2  3  4  5  6  7  8  9
let numbers = [11,22,33,44,55,66,77,88,99,100]
// program 1
// print every element of array 

// for(let i = 0 ; i< numbers.length ; i++){
//    // console.log(i)
//     console.log(numbers[i])
// }

// for(let i = numbers.length -1 ; i >= 0 ; i--){
//    // console.log(i)
//     console.log(numbers[i])
// }

// Array -- type 
// when we define array we create object 
// properties and method
// method and return type

// Gym()
// action - excercise
// return - health 

// Sleep()
// action - go to bed
// return - rest

//              0       1        2          3         4
let cities = ["pune","mumbai","banglore","kolkata","nashik"]
let a = cities.length
console.log(a)


// methods

// push()
// action -- add to the element 
// return - new element of array
let q1 = cities.push("wardha") 
console.log(q1)  // 6
console.log(cities) //

// unshift()
// action -- add the element at first 
// return - new length of array
let q2 = cities.unshift('jaipur')
console.log(q2)
console.log(cities)

// pop()
// action - removes the last element 
// return - returns the same lement 
let fruits = ["apple","mango","banana","grapes"]
let q3 = fruits.pop()
console.log(q3)
console.log(fruits)

// shift()
// action - removes the first element 
// return - firstElement
let q4 = fruits.shift()
console.log(q4)
console.log(fruits)


// includes()
let vegetables = ["cabbage","cauliflower","carrrot","potato"]
let q5 = vegetables.includes('cabbage')
console.log(q5)

// join()
let info = ["Ganesh","Kachare",9657699761]
console.log(info.join('-')) 
console.log(info.join('@'))
console.log(info.join(' '))

// indexOf()
let  flowers = ["rose","lily","jasmine","tulip","chameli"]
let q6 = flowers.indexOf('rose')
let q7 = flowers.indexOf('Rose')
console.log(q6)
console.log(q7)

