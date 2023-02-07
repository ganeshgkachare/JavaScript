

let x = 10
console.log(x)
x = 900
console.log(x)

const pi = 3.14
console.log(pi)
//pi = 89


// Arithmetic operator

// Addition       +
// Subtraction    -
// Multiplication *
// Division       /
// Modulus        %

let a = 10
let b = 5

console.log(a+b) // 15
console.log(a-b) // 5
console.log(a*b) // 50
console.log(a/b) // 2
console.log(a%b) // 0

console.log(22%5) // 2


let q = 8
let r = 4

console.log(q+r) 
console.log(q-r)
console.log(q*r)
console.log(q/r)
console.log(q%r)

// 10 pair - 50 lines DRY

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}

Calculator(12,6)
Calculator(8,4)

console.log("======================================")
function cal(x,y){
    console.log("Add is ",x+y)
    console.log("Sub is ",x-y)
    console.log("Mul is ",x*y) 
    console.log("Div is ",x/y)
    console.log("Mod is ",x%y)
    console.log("Exp is ",x**y)  
}
cal(2,3)