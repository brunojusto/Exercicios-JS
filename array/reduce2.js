const alunos = [
     { nome: 'João', nota: 7.3, bolsa: false },
     { nome: 'Pedro', nota: 5.2, bolsa: true },
     { nome: 'Carlos', nota: 9.8, bolsa: true },
     { nome: 'Bruno', nota: 10.0, bolsa: true },
     { nome: 'Lorena', nota: 7.3, bolsa: false },
     { nome: 'Jean', nota: 7.1, bolsa: false },
     { nome: 'Vanessa', nota: 6.4, bolsa: false },
     { nome: 'Ana', nota: 2.5, bolsa: true }
]

// Desafio 1: Todos os alunos são bolsistas?
const bolsistas = (resultado, bolsa) => resultado && bolsa
console.log(alunos.map(a => a.bolsa).reduce(bolsistas))


// Desafio 2: Algum aluno é bolsista? 
const algumBolsista = (resultado, bolsa) => resultado || bolsa
console.log(alunos.map(a => a.bolsa).reduce(algumBolsista))