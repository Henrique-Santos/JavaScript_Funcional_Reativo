const funcionarOuNao = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        }
        resolve(valor)
    })
}

funcionarOuNao('Testando...', 0.1)
    .then(console.log)
    .catch(console.log)