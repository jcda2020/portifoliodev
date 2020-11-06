function trararError(erro) {
    throw new Error('Algum erro aconteceu!')
    //throw 'erro'

}
function imprimi(objeto) {
    try {
        console.log(objeto.nome.toUpperCase() + '!') //nome                  
    } catch (e) {
        trararError()
    } finally {
        console.log('fim da execução')

    }

}
const objeto = { nome: 'João' }
imprimi(objeto)