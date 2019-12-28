// Não inicializada
let valor
console.log(valor)

// Não inicializa e não declarada
// console.log(valor2)

valor = null // Ausência de valores.
console.log(valor)
// console.log(valor.toString()) // Erro, nao pode acessar nenhum atributo de uma variável quando o que vem antes está null ou undefined.

const produto = {}
console.log(produto.preco) // Não dará erro, pois o produto foi definido, o que está indefinido é o preço!

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined, deixe que a linguagem decida quando.