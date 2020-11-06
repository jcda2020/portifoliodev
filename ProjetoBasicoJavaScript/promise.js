function soma(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (a + 1000)
        }, 4000)
    })
}
soma(450)
.then((res)=>{
    console.log(resultado)
})
.catch(error =>{
    console.log('Error - Algum parâmetro errado!')                          
})