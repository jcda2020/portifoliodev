function aumento (plano, salarioAtual){

switch (plano)  {
case 'A': 
    plano = 0.1
   
        return salarioAtual * (1 + plano)
case 'B': 
        plano = 0.15
        return salarioAtual * (1 + plano)
case 'C': 
        plano = 0.20
        return salarioAtual * (1 + plano)

default: 
        return 'Nenhuma opção válida foi escolhida'

}


}
console.log(aumento('A', 1000))
console.log(aumento('B', 1000))
console.log(aumento('C', 1000))
console.log(aumento(1000))