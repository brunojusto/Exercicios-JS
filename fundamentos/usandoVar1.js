{
     {
          var escopoGlobal = 'Isso é um teste!' // Variável visivel globalmente, podendo ser acessada e alterada em qualquer escopo.
     }
}
console.log(escopoGlobal)

var escopoGlobal = 'Novo texto'
console.log(escopoGlobal)
// Como essa variável está num escopo global, qualquer sobrescrita irá alterar o valor da mesma, podendo gerar um grande problema.



// Já no escopo de função, isso não acontece!
function escopoDaFuncao(){
     var local = 123
     console.log(local) // Como estou chamando a var LOCAL dentro do escopo, está tudo certo.
}
escopoDaFuncao()

// Se eu tentar chamar a variável que está dentro do escopo da função, dará um erro de referência.

// console.log(local) 

// Descomente a linha acima para testar o erro.