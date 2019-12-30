const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
     if (x == 5) {
          break // desvio de fluxo do laço corrente, saindo do laço
     }
     console.log(`O índice ${x} é = ${nums[x]}`)
}

for (y in nums) {
     if(y == 5) {
          continue // desvio de fluxo que para a repetição atual e vai pra próxima (neste caso ignorando o índice 5)
     }
     console.log(`O índice ${y} é = ${nums[y]}`)
}