
// demonstrar o sistema de módulos 
 //const jurosCompostos = require ("./questao06")

function anuidade(mes, valor) {

let valorAnuidade
let i = 0
if (mes > 1 )
    i = 0.05
//valorAnuidade = valor * Math.pow((1 + i),mes)
valorAnuidade = valor * (1 + i)**mes
 //valorAnuidade = jurosCompostos(valor,i,mes)
return valorAnuidade
}

const a = (m,v) => {
let i = 0  
if (m > 1)
i= 0.05

valor = v * (1 + i)**m

return valor


}

console.log(anuidade(3, 100))
console.log(a(3,100))