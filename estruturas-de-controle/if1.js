function soBoaNoticia(nota) {
     if(nota >= 7) {
          console.log('Aprovado com nota: ' + nota)
     }
}

soBoaNoticia(8.0)
soBoaNoticia(4.5) // Nao é true, então não imprime.

function seForVerdadeEuFalo(valor) {
     if(valor) {
          console.log('É verdade...' + valor)
     }
}
 
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
