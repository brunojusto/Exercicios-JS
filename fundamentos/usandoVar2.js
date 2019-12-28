// Continuação de usandoVar1.js

//  Você pode ter variáveis de nomes iguais, desde que estejam em escopos diferentes.

// Você cria uma var chamada local no método 1 e uma var chamada local no método 2.

// Assim elas não sobrescrevem umas as outras, não interferindo em nada...

// Já quando isso é feito no mesmo escopo, precisam ser nomeadas de forma diferente.

// Dica: Fuja do escopo global!!!

var numero = 1
{
     var numero = 2
     console.log('Dentro do escopo =', numero) // O segundo valor de VAR numero sobrescreveu, tornando-se 2.
}

console.log('Fora do escopo =', numero) // Neste caso, ambas ficarão com o valor 2.