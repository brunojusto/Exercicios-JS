let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // Como o resultado é verdadeiro, a operação também é verdadeiro

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Como o resultado é falso, a operação também é falso

console.log('Operações lógicas')
console.log(!!('' || null || 0 || 3)) // Se pelo menos um for true, a operação será true...
console.log(!!('' || null || 0 || NaN)) // Alterando o anterior para que todos sejam false, resultando na operação seja false também.
console.log(!!(3 && 2 && ' ' && Infinity && -1)) // Todos precisam ser true para que a operaçao seja true...
console.log(!!(3 && 2 && ' ' && Infinity && 0)) // Alterando para ao menos um falso, tornado toda a operação falsa.