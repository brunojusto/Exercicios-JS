function Carro(velocidadeMaxima = 200, delta = 5) {
     // Atributo privado
     let velocidadeAtual = 0

     // Metodo publico
     this.acelerar = function() {
          if (velocidadeAtual + delta <= velocidadeMaxima) {
               velocidadeAtual += delta
          } else {
               velocidadeAtual = velocidadeMaxima
          }
     }

     // metodo publico
     this.getVelocidadeAtual = function () {
          return velocidadeAtual
     }
}

const celta = new Carro
celta.acelerar()
celta.acelerar()
celta.acelerar()
celta.acelerar()
console.log(celta.getVelocidadeAtual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())