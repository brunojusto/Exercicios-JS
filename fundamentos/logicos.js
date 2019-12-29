function compras(trabalho1, trabalho2) {
     const comprarSorvete = trabalho1 || trabalho2
     const comprarTV = trabalho1 && trabalho2
     const comprarCamiseta = trabalho1 != trabalho2
     const pouparDinheiro = !comprarTV && !comprarCamiseta && !comprarSorvete

     return { 
          comprarSorvete,
          comprarTV,
          comprarCamiseta,
          pouparDinheiro 
     }
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))
