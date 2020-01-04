Array.prototype.filter2 = function(callback) {
     const newArray = []
     for(let i = 0; i < this.length; i++) {
          if(callback(this[i], i, this)) {
               newArray.push(this[i])
          }
     }
     return newArray
}
const produtos = [
     { nome: 'Notebook', preco: 2499, fragil: true },
     { nome: 'iPad Pro', preco: 4199, fragil: true },
     { nome: 'iPhone X', preco: 6999, fragil: true },
     { nome: 'Chuteira Adidas 2020', preco: 1999, fragil: false }, // É acima de 500, mas não é frágil. Então não mostrará.
     { nome: 'Copo de vidro', preco: 9.90, fragil: true }, // É frágil, mas não tem preço igual ou maior que 500. Então não mostrará.
     { nome: 'Camiseta', preco: 79.90, fragil: false },
     { nome: 'Chinelo', preco: 69.90, fragil: false },
     { nome: 'Espelho', preco: 500, fragil: true },
]

const caro = produto => produto.preco >= 2500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))