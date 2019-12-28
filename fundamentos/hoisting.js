// OBS: Não há por que utilizar variáveis antes mesmo de definí-las, este é apenas um exemplo para treinamentos.

/*
     A sentença de código de um programa é lida de cima pra baixo, só que em JavaScript isso não acontece 100% das vezes.

     No caso do VAR, ele sofre o hoisting. O próprio interpretador da linguagem joga ela pra cima.
*/
console.log('a =', a)
var a = 2
console.log('a =', a)

/*
     Em outras linguagens, isso daria um problema. Mas em JavaScript acontece o içamento (hoisting)
     jogando a variável a = 2 pra cima.

     Seria como se tivesse ficado assim:
     var a
     console.log('a =', a)
     a = 2
     console.log('a =' a)

     seria o mesmo resultado!
*/

// Até mesmo dentro de uma função o hoisting acontece com o VAR. Com LET isso não acontece!
function teste(){
     console.log('a =', a)
     var a = 2
     console.log('a =', a)
}
teste()

// Mostrará que com LET não pode acessar o LET A antes de ser inicializada como é possível com VAR.
function teste2(){
     console.log('a =', a)
     let a = 2
     console.log('a =', a)
}
teste2()