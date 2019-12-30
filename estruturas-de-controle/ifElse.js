const imprimirResultado = function(nota) {
     if(nota >= 7) {
          console.log('Aprovado')
     } else {
          console.log('Reprovado')
     } 
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(4)

const imprimirResultado2 = function(nota2) {
     if(nota2 >= 7 && nota2 <= 10) {
          console.log('Aprovado')
     } else if (nota2 >= 5 && nota2 < 7){
          console.log('Recuperação')
     } else if(nota2 < 0 || nota2 > 10){
          console.log('Valor inválido')
     } else {
          console.log('Reprovado!')
     }
}

imprimirResultado2(10)
imprimirResultado2(6)
imprimirResultado2(13)
imprimirResultado2(5)
imprimirResultado(2)