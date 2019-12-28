const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores [3])

console.log(valores[4]) // Em outras linguagens isso causaria um erro, mas em JavaScript apenas avisará que o índice 4 está indefinido.

valores[4] = 10
console.log(valores)
console.log(valores.length) // a função length mostrará o total de índices do vetor.


// Funçao push para empurrar novos elementos no array. 
valores.push({id:3}, false, 'teste') // Não é uma boa prática misturar dados, apenas mostrando que é possível.
console.log(valores)

// Função pop pega o último valor do array e deleta.
console.log(valores.pop())
console.log(valores)

// Deletando o indice 0 de valores.
delete valores[0]
console.log(valores)

console.log(typeof valores) // Um array é do tipo object.