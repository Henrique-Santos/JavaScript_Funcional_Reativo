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