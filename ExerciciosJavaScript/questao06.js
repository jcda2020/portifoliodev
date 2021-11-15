function juros_Simples(C, i, t) {
let montante = C + C * i * t 

return montante


}

//console.log(juros_Simples(100, 0.1,5))

juros = (C, i, t) => { return C + C * i * t }

//console.log(juros(100, 0.1,5))


module.exports = jurosCompostos = (capital, taxa, tempo) => { 

return  capital * (1 + taxa)**tempo

}  

//console.log(jurosCompostos(100, 0.1, 5))




