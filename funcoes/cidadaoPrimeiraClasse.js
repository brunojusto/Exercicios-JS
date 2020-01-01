// Criar de forma literal
function func1() {
     console.log('Função 1')
}
func1()

// Armazenando em uma variável
const func2 = function() {
     console.log('Função 2')
}

// Armazenar em um array
const array = [function (a,b) { return a+b }, func1, func2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { 
     return 'Opa' 
}
console.log(obj.falar())

// Passar função como parâmetro
function run(func3){
     func3()
}

run(function () {
     console.log('Executando...')
})

// Uma função pode retornar/conter outra função
function soma(a, b) {
     return function (c) {
          console.log(a + b + c)
     }
}
soma(2,3)(4)