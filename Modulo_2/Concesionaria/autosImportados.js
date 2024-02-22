/*En esta primera etapa, necesitamos requerir tu módulo autos y guardarlo en la variable autosImportados que se encuentra en la misma carpeta del archivo donde estás trabajando. Recordá que es el mismo archivo que creaste en la etapa anterior. 
Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.
Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.
PISTA:
Recordá que la ruta "." representa al directorio actual. Por ejemplo, para acceder al archivo juegos del directorio actual la ruta sería "./juegos".
*/ 

let autos = require("./concecionariaAutos")

let concesionaria = {
autos: autos,

/*Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.
Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior. 
Te sugerimos utilizar this.autos en lugar de autosImportados.
Recordá que cuando trabajamos con Arrays tenemos varios métodos para iterar sobre ellos, y uno de ellos nos sirve para buscar. 
PISTA:
Cuidado al usar arrow functions, te recomendamos usar function(). */

BuscarAauto: function (patente) {
    let AutoDeLaPatente = this.autos.filter(function (auto) {
        return auto.Patente == patente
    })
         if (AutoDeLaPatente.length > 0){
             return AutoDeLaPatente[0]
         }    else {
             return null
        }
    },
/*Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.
¿Cómo lo resuelven?
Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto, la cual ya nos devuelve el objeto literal a modificar.
PISTA:
Recordá que tenés que usar el this para acceder a la funcionalidad del mismo objeto literal.*/

venderAuto: function (patente) {
     let AutoVendido = this.BuscarAauto(patente);
            if (AutoVendido !== null) {
            AutoVendido.Vendido = "Si"
        }  else{
            return ["No se encuentra dentro de nuestro catalogo"]; 
        }
        return AutoVendido
    },

/*La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.
Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. Tené en cuenta que estamos optimizando nuestro código, por lo cual, deberíamos utilizar el método filter.
PISTA:
Recordá utilizar el this para llamar a una función definida dentro del mismo objeto literal.*/

AutosParaLaVenta: function(){
    let AutosParaLaVenta = this.autos.filter(function(auto){
        return auto.Vendido === "No"
    })
return AutosParaLaVenta
}
,

/*María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos. 
¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?
Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.
PISTA:
Recordá utilizar el this para ejecutar funciones dentro del mismo objeto literal.*/

autosNuevos: function () {
    return this.AutosParaLaVenta().filter(function (auto) {

       return auto.CantidadDeKilómetrosRecorridos <= 100;})
} ,

/*El cliente le pidió saber cuánto dinero generaron las ventas.
María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".
Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
¿Te acuerdas cuál es el método de Array con el que puedes generar un nuevo Array? 
PISTA:
Recordá utilizar el this para llamar a una funcionalidad dentro del mismo objeto literal.*/

ListaDeVentas : function () {
    let lista = this.autos.filter(function(auto){
        return auto.Vendido === "Si"
    })    
    let listaPrecio =  [];
    lista.map(function(auto){
       return listaPrecio.push(auto.PrecioFinal)
    })
return listaPrecio
},


TotalDeVentas: function () {
    return this.autos.reduce(function (acumulador, auto) {
        if (auto.Vendido === "Si") {
            return acumulador + auto.PrecioFinal;
        } else {
            return acumulador;
        }
    }, 0);
},

/*Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.
Una persona va a ser representada mediante un objeto literal de la siguiente forma:
{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
} 
Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
PISTA:
Ambas condiciones deben cumplirse a la vez: una persona debe de poder pagar cada cuota y el total del auto.
*/

PuedeComprar : function (auto, persona) {
    if (auto.PrecioFinal / auto.CantidadDeCuotas <= persona.capacidadDePagoEnCuotas && auto.PrecioFinal < persona.capacidadDePagoTotal ){
        return true 
    } else {
        return false
    }
},

/*{Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.
La función debe de realizar los siguientes pasos:
1) Obtener los autos para la venta
2) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?
3) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.


Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
PISTA:
No utilizar la función buscarautos
*/

autosQuePuedeComprar: function(persona) {
    let autosParaLaVenta = this.AutosParaLaVenta().filter(auto => {
        return this.PuedeComprar(auto, persona);
    });  
    return autosParaLaVenta;
}


}

let persona = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 200000,
    capacidadDePagoTotal: 100000
    } 


//console.log(concesionaria.autosNuevos());
//console.log(concesionaria.venderAuto('JJK116'));
//console.log(concesionaria.BuscarAauto('JJK116'));
//console.log(concesionaria.AutosParaLaVenta());
// console.log(autos);
//console.log(concesionaria.TotalDeVentas());
//console.log(concesionaria.ListaDeVentas());
//console.log(concesionaria.PuedeComprar(concesionaria.BuscarAauto('JJK116'), persona));
//console.log(concesionaria.autosQuePuedeComprar(persona));
