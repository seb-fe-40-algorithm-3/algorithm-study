let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number)

let units = input[1]%10
console.log(input[0]*units)

let tens = Math.floor((input[1]%100)/10)
console.log(input[0]*tens)

let hundreds = Math.floor(input[1]/100)
console.log(input[0]*hundreds)

console.log(input[0]*input[1])