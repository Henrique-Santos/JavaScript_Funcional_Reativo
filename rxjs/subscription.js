const { timer, Subscription } = require('rxjs')

const obs = timer(3000, 500)

const sub1 = obs.subscribe(num => {
    console.log(`#1 Gerou o número ${num}`)
})

const sub2 = obs.subscribe(num => {
    console.log(`#2 Gerou o número ${num}`)
})

/* É possivel instanciar uma Subinscrição, e agrupando em uma só as existentes. Podendo
para tudo de uma unica vez. */
const sub = new Subscription()
sub.add(sub1)
sub.add(sub2)

setTimeout(() => {
    sub.unsubscribe()
}, 5000)

/*
    É possivel add uma subinscrição em outra subinscrição. Assim a adicionada vai ser
filha da que a encapsula. Se vc parar uma das filhas as demais tmb irão parar. EX:
sub1.add(sub2)
*/ 