const resultado = nota => nota >= 7 ? 'Aprovado!' : 'Reprovado!'
console.log(resultado(10))
console.log(resultado(5.4))

const prova = nota => {
     return nota >= 7 ? 'Aprovou' : 'Reprovou'
}
console.log(prova(7))
console.log(prova(4))