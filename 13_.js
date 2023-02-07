
// let and const

let balance = 0
console.log(balance)
balance = 1000
console.log(balance)


const pi = 3.14
console.log(pi)
//pi = 89

// functions 

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(10,5)
Calculator(9,3)

// program 1
// function without parameter and without return type 

function sum(){
    console.log(8+7)
}

sum()


// program 2
// function with parameter and without return 

function suma(x,y){
    console.log(x+y)
}
suma(12,3)
suma(12,6)
suma(120,60)

// program 3
// function with parameter and return type 
// 100 Given   --->  100 + 100 , 100 - 50 , 100 * 0.10
// 100 Show    ---> print(100)

function sumb(x,y){
    return x + y
}
let w = sumb(1,3)
console.log(w)
console.log(w + w)
console.log(w - 2)
console.log(w * 0.10)



