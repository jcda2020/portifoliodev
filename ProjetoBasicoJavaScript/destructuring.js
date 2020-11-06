const { black } = require("color-name")

const pessoa = {
    nome: 'João',   
    idade: 18,
    endereco: {
        rua: 'Rua Amélia',
        numero: 40
    }
}
// aplicação em objetos
const {nome, idade} = pessoa

const {nome: n, idade: i} = pessoa   

//console.log(n, i)

const {endereco: {rua, numero, bairro}} = pessoa

//console.log(rua, numero, bairro)   
// op destructuting  <->  criação de um array
        const [a, b] = [10, 20, 30]
        //console.log(a,b)

const escolaride = ['fundamental','médio','superior']

const [f,, s] = escolaride                                                                                     

//console.log(f,s)

//passando 2 atributos
function rand({min = 0, max = 500}) {
const result = Math.random() * (max- min) + min
return Math.floor(result)
    }
console.log(rand({ max:80}))

function rand2([min = 0, max = 500]) {
const result = Math.random() * (max- min) + min
     if (min > max) [min, max] = [max, min]
return Math.floor(result)
    }
console.log(rand2([ 80, 120]))
                                                                

