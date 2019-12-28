console.log(7 / 0) // Vai dar infinito
console.log('10' / 2) // Dará certo, desde que seja um tipo numérico.
console.log('10' * 2)
console.log('10' - 2)
console.log('3' + 2) /* **ATENÇÃO** Expecificamente em casos de String + Number, a string ganha 
preferência, achando que deveria concatenar por conta do sinal + que também serve de concatenação. */

console.log('Show' * 2) // Embora acima tenha dado certo, nesta caso não dará, pois Show é um tipo de texto.
console.log(0.1+0.7) // O resultado será 0.79999999999, embora imaginamos o 0.8 como resultado. Gerando imprecisão!



 
// Uma variável nomeada do tipo Number não precisa colocar parenteses no toFixed.
let teste = 12.3233
console.log(teste.toFixed(1))
// Já quando for um número literal, você precisa colocar o número entre parenteses, senão dará erro.
console.log((10235).toString(2))
console.log((2.4534525).toFixed(2))
// console.log(10.toString()) 

// Descomente a linha 15 para fazer o teste do erro, caso queira.