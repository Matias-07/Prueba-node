// 1
function AlquilerDeUnVehiculo (TipoDeAuto, DiasDeAlquiler, SillaParaBebe){
    let montoTotal = 0;

    switch (TipoDeAuto) {
        
    case "compacto": 
        montoTotal = 14000
        break; 
    case "mediano": 
        montoTotal = 17000
        break; 
    case "camioneta": 
        montoTotal = 28000
        break;
    default: 
        console.log("Debe de ingresar un modelo de auto valido");
        return
    }

if (SillaParaBebe === "si"){
    montoTotal += 1200;
}

return montoTotal*DiasDeAlquiler

}

var Vtipo = "compacto"; 
var VDias = 10; 
var Vsilla = "si"

let PagoDeAlquiler = (AlquilerDeUnVehiculo (Vtipo, VDias, Vsilla))

if (Vsilla === "si") {
    console.log("Estimado gracias a que usted alquilo su auto en " + Vtipo + " " + "durante"+ " "+ VDias + " días, incluyendo la silla para niños, su monto total a pagar es:" + PagoDeAlquiler);

} else {
    console.log("Estimado gracias a que usted alquilo su auto en " + Vtipo + " " + "durante"+ " "+ VDias + " días, su monto total a pagar es:" + PagoDeAlquiler);
}



// 2


function TipoDeHamburguesa (CarneDeLaHamburguesa, ConJamon, ConQueso, SalsaDeTomate, Mayonesa, Moztasa, Tomate, Lechuga, Cebolla){
    let precioCarne = 0; 

    switch (CarneDeLaHamburguesa){
        case "carne a la parrila":
            precioCarne = 1800;
            break;
        case "pollo": 
            precioCarne = 1500;
            break;
        case "vegetariana":
            precioCarne = 1200;
            break;
        default: 
        console.log("debe de insertar un tipo de hamburguesa valido");           
        return 0; 
    } 

let PrecioAdicionales = 0; 

if (ConJamon == true){
    PrecioAdicionales += 30; 
} 
if (ConQueso == true){
    PrecioAdicionales += 25; 
} 
if (SalsaDeTomate == true){
    PrecioAdicionales += 5 ;  
} 
if (Mayonesa == true){
    PrecioAdicionales += 5;  
} 
if (Moztasa == true){
    PrecioAdicionales += 5; 
} 
if (Tomate == true){
    PrecioAdicionales += 15;  
} 
if (Lechuga == true){
    PrecioAdicionales += 10; 
} 
if (Cebolla == true){
    PrecioAdicionales += 10; 
} 


let ValorTotal = precioCarne + PrecioAdicionales; 
return ValorTotal;
}

function mensaje (NombreDelUsuario, ApellidoDelUsuario,){
return NombreDelUsuario + " " + ApellidoDelUsuario; 
}

let NombreYApellido = mensaje ("Matias", "Ferrari")
let hamburguesaCompleta = TipoDeHamburguesa ("carne a la parrila", true, false, true, true, true, true, false, true); 
console.log("Hola estimado" + " "+ NombreYApellido + " " +"queremos informarle que el monto a pagar por su hamburguesa es de:" + " "+ hamburguesaCompleta);


// 3

function Mayusculas (Palabra){
    return Palabra.toUpperCase() 
}
let LaPalabra = (Mayusculas ("pito"))
console.log(LaPalabra);

function TipoDe (codigo){
    return typeof(codigo)
}

let TipoDeCodigo = (TipoDe("matias"))
console.log(TipoDeCodigo);

function EdadPerros (Edad) {
    return Edad * 7 
}

let perro = (EdadPerros(12));
console.log("La edad de tu perro es: " + perro);

function ValorDeUnaHora (SalarioMensual, CantDiasTrabajados, CantDeHorasPromedio){
    return (SalarioMensual / CantDiasTrabajados) / CantDeHorasPromedio; 
}

let SueldoHora = (ValorDeUnaHora(50000,22,9));
console.log(SueldoHora);
