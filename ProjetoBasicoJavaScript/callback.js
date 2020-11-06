function soma(a, callback) {
    return setTimeout(() => {
            return callback(null, a + 1000)
    }, 4000 ) }                                    
function imprime2(err,resultado){
        if(err) throw err        

console.log(`Resultado: ${resultado}`)
}
//console.log(soma(300,imprime2))  

const frutas = ["Manga","Banana","Laranja"]

function obterFrutas (nome, indice){
    console.log(`${indice + 1}.${nome}`)
}
//frutas.forEach(obterFrutas);

const notas = [2, 3.5, 4, 5, 7, 8.5, 9, 9.5]

const notasAltas = notas.filter(function (nota){
        return nota >= 6
})
console.log(notasAltas)    