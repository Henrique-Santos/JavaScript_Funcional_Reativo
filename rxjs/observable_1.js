// Comparação de uma Promise com um Observable
const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
    resolve('Promise é bem legal!')
})

promise.then(console.log)

const obs = new Observable(subscriber => {
    // Criando um Stream de Dados
    subscriber.next('Observer')
    subscriber.next('é')
    subscriber.next('bem')
    subscriber.next('legal!')
    subscriber.complete()
})

obs.subscribe(console.log)

/*
    Observable é um Objeto. Que podem emitir dados durante um periodo de tempo. Essa 
Stream de Dados, é feita atravéz do método next(). Na criação de um Observable é passado 
uma função de inscrição, chamada normalmente de subscriber(). Essa função é executada
sempre que o Observable é inscrito. A inscrição é feita com o método subscribe().

    Se o Observable for concluído com sucesso, ele envia um dado para o Observer usando 
o método complete(). Se houver algum erro, ele envia o erro para o Observer, usando
o método error().
*/