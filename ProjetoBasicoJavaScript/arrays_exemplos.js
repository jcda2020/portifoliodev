const notas = []

notas [0] = 5
notas [1] = 10
notas [2] = 15
console.log(notas)
notas [4] = 25 
console.log(notas)


const nordeste = ["Alagoas", "Bahia", "Ceará", "Maranhão", "Paraíba", 
"Pernambuco", "Piauí", "Rio Grande do Norte", "Sergipe"]

console.log(nordeste)


const inventores = ['Albert Einstein','Thomas Edson', 'Galileu Galilei',
'Leornado da Vinci']

// podemos fazer uma const receber um array

const inventor = inventores[3]

console.log(inventor)   
//exemplo 1
inventores.forEach(function(nome,indice){
        console.log(`${indice + 1})${nome}`)

})
//exemplo 2
inventores.forEach(nome=> console.log(nome))
// passando uma função como parâmetro
const genios = exibir => console.log(exibir)

inventores.forEach(genios)

