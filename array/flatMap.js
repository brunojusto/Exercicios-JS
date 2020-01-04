const escola = [{
     nome: 'Turma 1',
     alunos: [{
          nome: 'Bruno',
          nota: 9.4
     }, {
          nome: 'Ana',
          nota: 7.5
     }]
}, {
     nome: 'Turma 2',
     alunos: [{
          nome: 'Vanessa',
          nota: 7.7
     }, {
          nome: 'Lorena',
          nota: 9.7
     }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
     return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)