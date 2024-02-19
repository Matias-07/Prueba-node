// funcion expresada 

let Suma = function (NumeroA, NumeroB) {
    return NumeroA + NumeroB;  
}

console.log(Suma (10,4));

// funcion declarada

function multiplicar (NumeroC, NumeroD){
    return NumeroC*NumeroD;
}

console.log(multiplicar(5,5));

// arrow function 

let laMitad = numero => numero/2; 
console.log(laMitad(5));

let trabajar = dia => {
    if (dia == "sabado" && "domingo"){
        return ("no tengo que ir a trabajar");
        
    } else {
        return ("tengo que ir a trabajar");
    }
}

console.log(trabajar ("sabado"));

// callbacks 

let sumar = (NumeroE, NumeroF) => NumeroE + NumeroF; 
let restar = (NumeroE, NumeroF) => NumeroE - NumeroF; 
let multiplica = (NumeroE, NumeroF) => NumeroE * NumeroF; 
let dividir = (NumeroE, NumeroF) => NumeroE / NumeroF; 

let calculadora = (NumeroE, NumeroF, operacion) => operacion (NumeroE, NumeroF)

console.log(calculadora (20,5,multiplicar));