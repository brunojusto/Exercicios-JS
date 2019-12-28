function rand([min = 0, max = 1000]) {
     if (min > max) [min, max] = [max, min]
     const valor = Math.random() * (max - min) + min
     return Math.floor(valor)
}

console.log(rand([50, 40])) // 50 max, 40 min
console.log(rand([992])) // passando somente um, irá assumir o primeiro, que é o minimo.
console.log(rand([, 10])) // passando apenas o valor máximo. Minimo assume o 0.
console.log(rand([])) // Assume os valores padrões
// console.log(rand()) // Aqui está tentando desestruturar um elemento de algo que é null ou undefined, então dará um erro.