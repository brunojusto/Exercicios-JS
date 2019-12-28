const peso1 = 1.0
const peso2 = Number('2.0')
const teste3 = Number('2.1')

console.log(peso1, peso2)

// Estou perguntando se minhas constantes são do tipo inteiro ou não.
console.log(Number.isInteger(peso1)) 
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(teste3))

const n1 = 9.471
const n2 = 4.633

const total = n1 * peso1 + n2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Estou dizendo quantas casas após a vírgula eu quero que mostre.
console.log(media.toString(2)) // Estou convertendo o valor ponto flutuante para valor binário.
console.log(typeof media) // Tipo Number
console.log(typeof Number) // Tipo Function