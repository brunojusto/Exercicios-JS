// Exemplos de usabilidade da notação ponto.

console.log(Math.ceil(6.1)) // Arredonda pra cima (7)
// console.log(Math.floor(6.8)) // Arredonda pra baixo (6)

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
     this.nome = nome
     this.exec = function() {
          console.log('exec...')
     }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()