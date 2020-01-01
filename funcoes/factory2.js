function criarProduto(nome, preco) {
     return {
          nome,
          preco,
          precodesconto10: preco * 0.90
     }
}

console.log(criarProduto('Celular', 3500.00))
console.log(criarProduto('Macbook', 6500.00))