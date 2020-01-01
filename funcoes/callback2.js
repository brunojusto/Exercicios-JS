const notas = [7.7, 6.5, 5.2, 3.5, 7.1, 9.0 , 10.0, 10.1]

// sem callbacks
const notasBaixas1 = []
for (let i in notas) {
     if(notas[i] < 7) {
          notasBaixas1.push(notas[i])
     }
}

console.log(notasBaixas1)

// Com callbacks
const notasBaixas2 = notas.filter(function (nota){
     return nota < 7
})
console.log(notasBaixas2)


const boasNotas = notas.filter(function(nota) {
     return nota >= 7 && nota <= 10
})
console.log(boasNotas)


const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)