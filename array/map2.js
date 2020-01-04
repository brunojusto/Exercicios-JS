const carrinho = [
     '{ "nome": "Caderno", "preco": 29.90 }',
     '{ "nome": "Lapis", "preco": 2.00 }',
     '{ "nome": "Borracha", "preco": 1.00 }',
     '{ "nome": "Mochila", "preco": 150.00 }',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)