const fs = require('fs') 
const path = require('path') 

const caminho = path.join(__dirname, 'dados.txt')

const exibirConteudo = (_, conteudo) =>
    console.log(conteudo.toString())

const lerArquivo = caminho => {
    return new Promise(resolve => {
        resolve(fs.readFile(caminho, exibirConteudo))
    })
}

lerArquivo(caminho)
    .then(texto => console.log)