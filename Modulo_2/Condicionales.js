// if - else if - else

let clima = "soleado"
let dia = "sabado"

if ( clima == "soleado" && dia == "sabado" ){
    console.log ("Es un dia perfecto para caminar");

} else if (clima == lluvioso && dia == sabado){
    console.log("No es el dia perfecto pero funcionara");  
} else {
    console.log("Hoy me quedare en casa"); 
} 

let edad = 19;
let acceso = '';

if (edad < 16) {

    acceso = 'prohibido';
    console.log (acceso);

} else if (edad >= 16 && edad <= 18) {
 
    acceso = 'permitido solo acompañado de un mayor';
    console.log (acceso);

} else {
 
    acceso = 'permitido';
    console.log (acceso)
}

// if ternario - switch 

let fruta = "Mango"

let frutaResultado = fruta == "Mango"?"me encanta el mango":"quisiera haber tenido mango"; 
console.log(frutaResultado);

let auto = "ford";  

switch (auto){
    
    case "ford": 
    console.log("esa es la marca que quiero para mi auto!");
    break; 
    case "mercedes": 
    console.log("se me va de presupuesto");
    break;
    case "BMW":
    console.log("Es una buena marca pero prefiero ford");
    break; 
    default: 
    console.log("mejor ahorro para unas vacaciones");
    break; 
}

let BicicletaA = {
    Rodado: 12,
    marca: "Mountain Bike"
}

let BicicletaB = {
    Rodado: 34,
    marca: "Aurora"
}

let MejorBicicleta = BicicletaA.Rodado < BicicletaB.Rodado?BicicletaB.marca: BicicletaA.marca; 
console.log("La bicicleta con mayor rodado es" + " " + MejorBicicleta);

let diaEjercicio = "lunes"

switch (diaEjercicio){
    case "lunes":
        console.log("Que dia de mierda, tengo que trabajar");
        break;
    case "martes": 
        console.log("queda un dia menos para el fin de semana");
        break;
    case "sabado": 
        console.log("finalmente es fin de semana!!");
        break;
    case "domingo": 
        console.log("finalmente es fin de semana!!");
        break;
    default: 
        console.log("bueno es otro dia de la semana");
}