const nums = [1,2,3,4,5]

let resultado = nums.map(function(e) { // Gera um novo array com base nos valores de nums, mas não altera o array nums
     return e * 10
})

console.log(resultado, nums)

const soma10 = e => e + 1000
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)