const jurosCompostos = require ("./questao06")


function anuidade(mes, valor) {

    let valorAnuidade
    let i = 0

    if (mes > 1)
        i = 0.05
    
    //valorAnuidade = valor * (1 + i)**mes
valorAnuidade = jurosCompostos(valor,i,mes)

    return valorAnuidade

}

console.log(anuidade(1,100))
console.log(anuidade(3,100))

/*const a = (m,v) => {
let i =0 
    if (m > 1)
        i = 5/100

let valor = v * (1 + i)** m


return  valor }

console.log(a (1, 100))
console.log(a (3, 100))
console.log(a (5, 100))*/