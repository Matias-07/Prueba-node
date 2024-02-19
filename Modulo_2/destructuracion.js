// Destructuracion y spread operator array

const { timeLog } = require("console");

let Paises = ["Argentina","Venezuela", "Mexico","Chile","Uruguay"]; 

let OtrosPaises = ["España", "Francia", "Estados Unidos"]

let arrayCompleto = [Paises + OtrosPaises]

let TodoJunto = Paises.join(' x ')
console.log(TodoJunto);

console.log(arrayCompleto);

let ArrayJunto = [...Paises, ...OtrosPaises]; 
console.log(ArrayJunto);


console.log();


let [PrimerPais, SegundoPais, , TercerPais] = Paises 

console.log(TercerPais);

let persona = {
    nombre: "matias",
    apellido: "ferrari",
    edad: 17,
    cantHermanos: 3, 
}

let {nombre, cantHermanos, apellido: LastName} = persona; 

console.log(LastName);

let Curso = {
curso: "programacion",
duracion: "2 meses", 
}

let EstudianteUno = {
    nombre: "Matias", 
    EMail: "matias.ferrari.m@gmail.com",
    ...Curso, 
}

let EstudianteDos = {
    nombre: "Gabriel", 
    EMail: "Gabriel.m.ferrari@gmail.com",
    ...Curso, 
}

console.log(EstudianteDos);
console.log(EstudianteUno);


function peliculasVistas (...nombreDePeliculas){
    for (let i = 0; i < nombreDePeliculas.length; i++) {
        console.log("la persona ya vio: " + nombreDePeliculas[i]);
    }

} 

peliculasVistas("Mi pobre angelito", "iron man 3", "end game")

let Numeros = [10, 20, 32, 40, 9]; 

console.log(Math.min(...Numeros) ); 

function Sumar(...numeros) {
    return numeros.reduce (function(ac, sum){
       return ac += sum; 
    })
}

console.log(Sumar (1,4));   
console.log(Sumar (1,1,1,1,1,1,1,1,1,1,1,1,1));   