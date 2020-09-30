// Lib para coletar os dados do teclado
const readline = require('readline')

function obterResposta(pergunta) {
    /* Essa Interface, tanto exibe os dados no console
    Quanto captura os dados apartir do teclado */
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    return new Promise(resolve => {
        rl.question(pergunta, resp => {
            resolve(resp)
            rl.close()
        })
    })
}

// Observer
function namorada() {
    console.log('N: Apagar as luzes')
    console.log('N: Pedir silencio')
    console.log('N: Surpresa!!!')
}

// Observer
function sindico() {
    console.log('S: Monitorando o barulho!')
}

// Subject
async function porteiro(interessados) {
    while(true) {
        const resp = await obterResposta('O namorado chegou? (s/N/q) ')
        if (resp.toLowerCase() === 's') 
        // Os observadores sao notificados
            (interessados || []).forEach(obs => obs())
        else if (resp.toLowerCase() === 'q') break
    }
}

/* 
    Chamada da Funcao -> Registra dois observadores!
    Os observadores sao: namorada e sindico
    O subject e o porteiro!
*/
porteiro([namorada, sindico])