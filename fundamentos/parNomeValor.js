const saudacao = 'E ai parceiro, tudo bom?' // contexto léxico 1

function exec(){
     const saudacao = 'Opa, tudo certo e você?' // contexto léxico 2
     return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
     nome: 'Bruno',
     idade: 22,
     endereco: {
          logradouro: 'Rua universitária',
          numero: 1897
     }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)