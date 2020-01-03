// Object.preventExtensions 
const produto = Object.preventExtensions({
     nome: 'Coca-cola',
     preco: 1.99,
     tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // Ele não é extensivel, não pode adicionar mais nada, mas pode excluir atributos.
produto.descricao = 'Refrigerante 600 ml' // tentei adicionar uma descrição
delete produto.tag
console.log(produto) // Resultado foi que não tem como adicionar assim... continua os atributos padrões, exceto a tag que foi excluída.\

// Object.seal
const pessoa = {
     nome: 'Bruno',
     idade: 22
}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
// Não pode adicionar nada nem deletar, mas pode alterar os valores dos atributos já existentes! 
pessoa.sobrenome = 'Silva' // Não há atributo chamado sobrenome. 
delete pessoa.nome // Não pode deletar nada.
pessoa.idade = 29 // Permitido alterar valores... passando a idade de 22 para 29.
console.log(pessoa)

