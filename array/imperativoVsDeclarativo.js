const alunos = [
     { nome: 'João', nota: 7.9 },
     { nome: 'Maria', nota: 9.2 }
]

// Imperativo - Foco em COMO fazer.
let total1 = 0
for (var i = 0; i < alunos.length; i++) {
     total1 += alunos[i].nota
}
console.log('Média = '+ total1 / alunos.length)

// Declarativo - Foco em O QUE fazer.
const getNova = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNova).reduce(soma)
console.log('Média = '+total2 / alunos.length)