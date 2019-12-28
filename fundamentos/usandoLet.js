var num = 1 // var não obedece os escopos.
{
     let num = 2 // Let é mais restrito, dando preferência ao escopo em que ele pertence, não sobrescrevendo a variável num = 1.
     
     console.log('dentro =', num) /* Aqui ele procurou o NUM em um escopo interno, como ele achou, 
     então ja usa o mesmo, senão procuraria de outro escopo mais abrangente. */
}
console.log('fora = ', num)

// Grande diferença entre VAR e LET.