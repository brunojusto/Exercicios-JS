const pessoa = { nome : 'Joao'}
pessoa.nome = 'Bruno'
console.log(pessoa)

// objeto constante, onde nada será alterado
const pessoaConstante = Object.freeze({ nome: 'Lorena' })
pessoa.nome = 'Bruno'
delete pessoa.nome
console.log(pessoaConstante)