const [a] = [10] // Desestruturando de um array.
console.log(a)

const [n1,/* n2 */,n3,/* n4 */,n5,n6=0] = [10,7,9,8] // ignorando o suposto n2 e n4

//    n1=10, n2=7, n3=9, n4=8, n5=undefined, n6=0
// Como o n2 e n4 não existem, ele ignora os valores 7 e 8... Não sobrando valores para n5 então o torna undefined. N6 é 0 pois já foi predefinido.

console.log(n1, n3, n5, n6) 