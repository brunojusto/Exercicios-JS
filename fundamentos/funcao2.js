// Armazenando uma função em uma variável
const imprimirSoma = function(a,b) {
     console.log(a+b)
}

imprimirSoma (2,3)

// Armazenando uma função arrow em uma variável
const soma = (a,b) => {
     return a+b
}

console.log(soma(2,3))

// Com retorno implícito, tornando mais curta ainda.
const subtracao = (a,b) => a-b
console.log(subtracao(2,3))

// tornando ainda mais curta quando só tem um único parâmetro
const imprimirTexto = t => console.log(t)
imprimirTexto('Texto declarativo')