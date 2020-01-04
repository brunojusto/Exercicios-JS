
const produtos = [
     { nome: 'Notebook', cor: 'branco', preco: 2499, fragil: true },
     { nome: 'Caneca', cor: 'preto', preco: 600, fragil: true },
     { nome: 'Caneca', cor: 'branco', preco: 600, fragil: true },
     { nome: 'iPad Pro', preco: 4199, fragil: true },
     { nome: 'iPhone X', preco: 6999, fragil: true },
     { nome: 'Chuteira Adidas 2020', preco: 1999, fragil: false }, // É acima de 500, mas não é frágil. Então não mostrará.
     { nome: 'Copo de vidro', preco: 9.90, fragil: true }, // É frágil, mas não tem preço igual ou maior que 500. Então não mostrará.
     { nome: 'Camiseta', preco: 79.90, fragil: false },
     { nome: 'Chinelo', preco: 69.90, fragil: false },
     { nome: 'Espelho', preco: 500, fragil: true },
]
/*// Mostra apenas produtos de 500 reais acima e que também são frágeis.
console.log(produtos.filter(function(p) {
     return p.preco >= 500 && p.fragil === true
})) */

// ou
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil == true
const cor = produto => produto.cor == 'branco'
console.log(produtos.filter(caro).filter(fragil).filter(cor))
// ou melhor ainda
const caroEFragilEBranco = produto => produto.preco >= 500 && produto.fragil  == true && produto.cor === 'branco'
console.log(produtos.filter(caroEFragilEBranco))