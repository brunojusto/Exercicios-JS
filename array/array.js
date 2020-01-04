console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana','Jean']
console.log(aprovados[1])

aprovados[4] = 'Rafael'
aprovados.push('Bruno')
console.log(aprovados.length)

aprovados[9] = 'Lorena'
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados [1]
console.log(aprovados[1]) // Apenas deleta e torna o indice undefined. 
console.log(aprovados[2]) // Não altera o indice.

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,2,'Elemento1','Elemento2','Elemento3') // Definimos a posição a ser modificada e quais elementos serão "pushados"
console.log(aprovados)