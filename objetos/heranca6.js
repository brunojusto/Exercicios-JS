function Aula(nome, id_video) {
     this.nome = nome
     this.id_video = id_video
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)

// simulando o new
function novo(f, ...params){
     const obj = {}
     obj.__proto__ = f.prototype
     f.apply(obj, params)
     return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)

console.log(aula3, aula4)