const { interval } = require('rxjs') 

const gerarNumeros = interval(500)

const sub1 = gerarNumeros.subscribe(num => {
    console.log(Math.pow(2, num))
})

setTimeout(() => sub1.unsubscribe(), 8000)

/*
    Quando chamamos um subscribe(), nós registramos uma função interessada. E a resposta
do subscribe, nos dá uma subscription, uma subinscrição.
*/