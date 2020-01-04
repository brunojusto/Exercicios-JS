Array.prototype.forEach2 = function(callback) {
     for (let i = 0; i < this.length; i++){
          callback(this[i], i, this)
     }
}

const aprovados = ['Agatha','Aldo','Daniel','Bruno']

aprovados.forEach2(function(n, i, a){ // forEach percorre sempre o nome, indice e array.
     console.log(a)
     console.log(`${i +1} - ${n}`)
})