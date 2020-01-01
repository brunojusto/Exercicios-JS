const prod1 = {
     nome: '...',
     preco: 45
}

const prod2 = {
     nome: '...',
     preco: 1234
}

const prod3 = {
     nome: '...',
     preco: 5
}

const prod4 = {
     nome: '...',
     preco: 12
}

// Factory simples
function criarPessoa() {
     return {
          nome: 'Ana',
          sobrenome: 'Silva'
     }
}
console.log(criarPessoa())
