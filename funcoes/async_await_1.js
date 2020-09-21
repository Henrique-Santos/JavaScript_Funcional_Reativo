const esperarPor = (tempo = 1500) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(console.log())
        }, tempo)
    })
}

const executar = async () => {
    await esperarPor()
    console.log('Async/Await 1...')

    await esperarPor()
    console.log('Async/Await 2...')

    await esperarPor()
    console.log('Async/Await 3...')
}

executar()