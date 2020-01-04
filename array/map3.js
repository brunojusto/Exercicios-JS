Array.prototype.map2 = function(callback) {
     const newArray = []
     for(let i = 0; i < this.length; i++) {
          newArray.push(callback(this[i], i, this))
     }
     return newArray
}

const carrinho = [
     '{ "nome": "Caderno", "preco": 29.90 }',
     '{ "nome": "Lapis", "preco": 2.00 }',
     '{ "nome": "Borracha", "preco": 1.00 }',
     '{ "nome": "Mochila", "preco": 150.00 }',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)