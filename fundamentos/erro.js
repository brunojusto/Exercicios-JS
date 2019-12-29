function tratarErroELancar(erro){
     // throw new Error('Mensagem do erro')
     // throw 10
     // throw true
     // throw 'mensagem'
     throw {
          nome: erro.name,
          msg: erro.message,
          date: new Date
     }
}
function imprimeNomeGritado(obj) {
     try {
          console.log(obj.name.toUpperCase() + '!!!!')
     } catch (e) {
          tratarErroELancar(e)
     }
}
//const obj = { nome: 'bruno' } // Como coloquei nome ao invés de name, causaria erro.
const obj = { name: 'Bruno' }
imprimeNomeGritado(obj)