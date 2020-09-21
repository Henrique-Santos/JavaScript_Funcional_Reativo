function geraraNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, ,min] = [min, max] //Realizando um Destructuring
    return new Promise(function(resolve, reject) {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        }
        resolve(aleatorio)
    })
}

async function gerarMegoSena(qtdeNumeros) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            // O await vai antes da função que retorna a Promise
            numeros.push(await geraraNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        throw 'Que chato!!!'
    }
}

gerarMegoSena(8)
    .then(console.log)
    .catch(console.log)