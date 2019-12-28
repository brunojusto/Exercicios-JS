/* 
     Atenção:
     Se você executar este código de imediato, dará um erro na linha 30 porque este
     código é para fins de estudo e treinamento, criando erros e bugs propositalmente.
*/

// exemplos simples

var a = 3
let b = 2
const c = 5
console.log(a,b,c)

// exemplo da diferença entre var e let... onde var pode ser alterado no mesmo escopo e let nao.

var a = 30
// let b = 40 // aqui estou redeclarando propositalmente para gerar o erro comentado abaixo. (Para testar, descomente o início da linha 11)

console.log(a, b) // irá causar um erro, dizendo que let b já foi declarado.

// As variáveis podem ser içadas (hoisting) para o topo do contexto, passando a ter um novo dado. A começou com 3, mudou para 30 e agora tem o valor 40.

var a = 30
var a = 40
console.log(a, b)

// Exemplo de constante válida e inválida.

const idade = 22 // const válida
const pi // const inválida, pois não foi inicializada.

console.log(idade, pi) 

/* 
     No código acima temos o exemplo de uma constante IDADE sendo declarada e inicializada
     na mesma linha (constante válida).
     
     E um outro exemplo onde o valor não é atribuido na declaração 
     de pi (constante inválida) ocasionando o erro SyntaxError: Missing initializer in const declaration. *NAO FOI DECLARADO UM VALOR A ELA*

     É importante utilizar const para declarar nossa variáveis, porque assim conseguimos um comportamento
     mais previsível, já que o valor que elas recebem não podem ser alterado.

*/



/*
     Conclusão:

     Graças ao hoisting, variáveis declaradas com a palavra-chave VAR podem ser utilizadas
     mesmo antes de sua declaração.

     Por outro lado, as variáveis criadas com LET. só podem ser utilizadas após sua declaração,
     pois, apesar de serem elevadas, elas não são inicializadas.

     Além das variáveis declaradas com var temos a possibilidade de usar constantes por meio
     da palavra-chave CONST ou utilizar variáveis com escopo de bloco através da LET.
*/

