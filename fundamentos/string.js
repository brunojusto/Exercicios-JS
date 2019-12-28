const escola = 'Ulbra'
/* 
     Indice começa sempre em 0 (zero)

     Neste caso: U=0, L=1, B=2, R=3, A=4

     Então colocando o 4 como parâmetro achará a letra A.
*/

// Buscando o índice do caracter deste texto.
console.log(escola.charAt(4)) // Encontrando a letra A

// E se eu colocar um indice que não existe na String?
console.log(escola.charAt(5)) // Neste caso nao dará erro, apenas retornará vazio.

// Buscando o índice do caracter encontrato no valor de escola na tabela unicode.
console.log(escola.charCodeAt(1)) // Aqui o indice 1 é a letra U, então ele buscará a posição do U na tabela unicode, que seria 108.

// Forma de descobrir qual é o índice do caracter desejado. 
console.log(escola.indexOf('r')) // Aqui quero descobrir o índice da letra R, que seria 3.

// Define o índice que comecará, ignorando os índices anteriores.
console.log(escola.substring(2)) // Neste caso, estou ignorando o indice 0 e 1. Ignorando a letra U e L. (sobrando somente B R A)


// Concatenação simples
console.log('O nome ' + escola + ' é massa!')

// Função que altera o valor já declarado.
console.log(escola.replace('a', '4')) // Estou alterando a letra A por 4. 

// Forma para substituir para array através do split.
console.log('Ana, José, Maria, Bruno'.split(',')) // Especifica o(s) caracter(es) a serem usados para separar a string, neste caso usei a vírgula.

