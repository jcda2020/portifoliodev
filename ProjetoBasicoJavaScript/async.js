function soma(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + 1000)
        }, 4000)
    })
}                                                                   
async function main() {
    try {
        const resultado = await soma(450)                                           
        console.log(`Bem sucedido: ${resultado}`)
    } catch (error) {
        console.log(`Temos Problemas: ${error}`)
    }
}
main()