// novo recurso do ES6

const pessoa = {
     nome: 'Ana',
     idade: 5,
     endereco: {
          logradouro: 'Rua x',
          numero: 1000
     }
}

const { nome, idade } = pessoa
console.log(nome, idade)