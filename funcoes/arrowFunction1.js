let dobro = function (a) {
     return 2 * a
}

dobro = (a) => {
     return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(50))

let ola = function() {
     return 'Hello'
}

ola1 = () => 'Olá'
ola2 = _ => 'Olaaaaa' // possui um parâmetro
console.log(ola1())
console.log(ola2())