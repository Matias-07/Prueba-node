let perfil = "administrador"; 

switch (perfil){
    case "administrador":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    case " ": 
        console.log("Debe especificar el perfil del usuario");
        break;
    case "asistente": 
        console.log("Usted sólo tiene permisos de consultar datos");
        break
    default: 
        console.log("Debe especificar un perfil válido");
}

let pagoMes = 10000;

let consumokwh = 335; 

if (consumokwh >= 300 ) {
    console.log("Debido a que supero los 300 KWH consumidos en el hogar se le cobrara un 20% mas, el total de su compra ed de:" + " " + (pagoMes*(20/100)+pagoMes));
} else {
    console.log("Debido a que usted consume menos de 300 KWH en su hogar por mes no se le cobrara ningun aumento"); 
}

let aumento = consumokwh >= 300? console.log("Debido a que supero los 300 KWH consumidos en el hogar se le cobrara un 20% mas, el total de su compra ed de:" + " " + (pagoMes*(20/100)+pagoMes)): console.log("Debido a que usted consume menos de 300 KWH en su hogar por mes no se le cobrara ningun aumento"); 

let Palabra = "perro"

switch (Palabra){
    case "perro":
        console.log("dog");
        break;
    case "puerta":
        console.log("door");
        break;
    case "ventana":
        console.log("window");
        break;
    case "mesa":
        console.log("table");
        break;
    case "gato":  
        console.log("cat");
        break;
    default:
        console.log("la palabra ingresada es incorrecta");
}