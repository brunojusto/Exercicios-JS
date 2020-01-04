const aprovados = ['Agatha','Aldo','Daniel','Bruno']

aprovados.forEach(function(n, i, a){ // forEach percorre sempre o nome, indice e array.
     console.log(a)
     console.log(`${i +1} - ${n}`)
})