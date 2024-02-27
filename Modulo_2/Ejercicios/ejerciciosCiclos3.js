function Sumar10AlOriginal(num) {
    for (let i = 0; i < 11; i++) {
        console.log(num++);
    }

}

Sumar10AlOriginal(10)


let numeroImpar = 1

for (let numeroX = 0; numeroX < 19;) {
    if (numeroImpar % 3 == 0) {
        console.log(numeroImpar);
        numeroX++
    }
    numeroImpar++

}

let numeroImpar2 = 1

for (let numeroX = 0; numeroX <= 57; numeroX += 3) {
    console.log(numeroX);
}

function SumatoriaDe100() {
    for (let i = 0; i <= 100; i++) {

    }
}


let sumatoria = 0;

for (let i = 0; i <= 100; i++) {
    sumatoria += i
}

console.log("la sumatoria de los numeros entre el 0 y el 100 son: " + sumatoria);

function Mayuscula(PalabraMayuscula) {
    return PalabraMayuscula.toUpperCase()
}

let LaPalabrota = Mayuscula("practicando el uso de los ciclos o bucles")
console.log(LaPalabrota);

let NumerosPositivos = [10, 40, 27, 45, 63, 50, 30, 40, 20, 21, 22, 100];

function SoloLosNumerosPares(Numerito) {
    let NumerosPares = [];

    for (let i = 0; i < Numerito.length; i++) {
        if (Numerito[i] % 2 === 0) {
            NumerosPares.push(Numerito[i]);
        }



    }

    return NumerosPares;

}


let LosNumeros = SoloLosNumerosPares(NumerosPositivos);
console.log(LosNumeros);