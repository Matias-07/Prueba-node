// map

let notas = [10, 4, 5, 8, 3, 1, 2,6, 7, 9,]; 

let NotasMultiplicado100 = notas.map(let = numero => numero*10) 

// console.log(NotasMultiplicado100);

// filter

let notasAprobadas = notas.filter(function(numero){
    return numero >= 6; 
})

// console.log(notasAprobadas);


// reduce

let SumaNotas = notas.reduce(function(Acumulador, Numero){
    return Acumulador + Numero; 
})

console.log(SumaNotas);

// forEach 

notas.forEach(function(valor, indice){
    console.log("En la posicion "+ indice + " engo el valor " + valor);
})

// formato JSON.stringify

let amigos = ["Agustin", "Matias","Gabriel","Lola","Silvana"]

let AFormatoString = JSON.stringify(amigos); 
console.log(AFormatoString);

// formato JSON.parce

let AFormatoOrinal = JSON.parse(AFormatoString); 
console.log(AFormatoOrinal);

let persona =[{
    nombre: "matias",
    edad: "17",
    direccion: "caaguazu5865"
}]

let personaJson = JSON.stringify(persona); 
// console.log(personaJson);

let PersonaOriginal = JSON.parse(personaJson); 
// console.log(PersonaOriginal);

let PersonaSeparada = persona.map(function(){
    return JSON.stringify(persona); 
}) 

console.log(PersonaSeparada.join(" , "));


