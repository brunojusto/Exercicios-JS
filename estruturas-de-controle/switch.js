const imprimirResultado = function (nota) {
     switch (Math.floor(nota)) {
          case 10: case 9: case 8:
               console.log('Destaque da turma')
               break;
          case 7: case 6:
               console.log('Aprovado')
               break;
          case 5: case 4:
               console.log('Recuperação')
               break;
          case 3: case 2: case 1: case 0:
               console.log('Reprovado')
               break;
          default:
               console.log('O valor: ' + nota + ' é inválido!')
     }
}

imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(4)
imprimirResultado(2)
imprimirResultado(14)