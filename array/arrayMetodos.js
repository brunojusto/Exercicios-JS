const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // Remove o último elemento da lista
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Massa saindo de novo
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Pega um pedaço do array a partir do indice definido
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Do indice 1 até o 4, mas sem incluir o ultimo valor... pegando o indice 1,2,3
console.log(algunsPilotos2) 