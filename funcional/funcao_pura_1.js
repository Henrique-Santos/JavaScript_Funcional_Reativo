const PI = 3.14

// Funçao Impura
function areaCirc(raio) {
    return raio * raio * PI
}

console.log(areaCirc(10))

// Funçao Pura
function areaCircPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircPura(10, Math.PI))