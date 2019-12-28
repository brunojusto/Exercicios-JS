// Melhorando a estética de strings!

const nome = 'Bruno'
const concatenacao = 'Olá ' + nome + '!'

// Exemplo para mostrar que ele suporta e considera as quebras de linha.
const template = `
     Olá
     ${nome}!`
console.log(concatenacao, template)

// Expressoes
console.log(`1 + 1 = ${1 + 1}`)

const tornarMaiusculo = texto => texto.toUpperCase()
console.log(`Ei... ${tornarMaiusculo('cuidado')}!`)