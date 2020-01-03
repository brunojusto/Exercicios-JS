// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

const produto2 = 'Cadeira'
delete produto2.preco
delete produto2['marca do produto']
console.log(produto2)

const carro = {
     modelo: 'A4',
     valor: 89000,
     proprietario: {
          nome: 'Bruno',
          idade: 56,
          endereco: {
               rua: 'Rua universitária',
               numero: 1897
          }
     },
     condutores: [{
          nome: 'Lorena',
          idade: 53
     }, {
          nome: 'Vanessa',
          idade: 33
     }],
     calcularValorSeguro: function(){
          // ...
     }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'St. Dean'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)