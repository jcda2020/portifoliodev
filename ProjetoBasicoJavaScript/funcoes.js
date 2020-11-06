function multiplica(a, b) {
    let result
    result = a * b
    return result
}



function calculadora() {

    let valor = multiplica(5, 6)

    return valor
}

//console.log(calculadora())

let a = function () { return b = 2 * 3 }
//console.log(a ())

let resultado = (a, b) => { return a * b }

//console.log (resultado (3,6))                                    

retorno = a => 2 * a
//retorno implícito                                          

//console.log(retorno(25))

//console.log(a(7))        


msn = () => 'apenas com os parenteses'

//console.log(msn())

oi = _ => "Hello!"
//console.log(oi())

const soma = function (x, y) {
    return x + y
}
const imprimaResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}
imprimaResultado(3,4)
imprimaResultado(3,4,soma)
imprimaResultado(3,4, function(x,y){
return x - y
//fim da anônima
} )//fim do imprimaResultado    

const carro = {
    buzina: a => 'bi-bi'
    }
 console.log(carro.buzina())                                  