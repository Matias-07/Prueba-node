/*En base a las definiciones técnicas tomadas con el equipo deberás declarar la variable autos. Esta debe contener los siguientes vehículos: 
1.	El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
2.	El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.
Cada auto debe tener los siguientes atributos: marca, modelo, precio, km, color, cuotas, anio, patente, vendido. 
Luego de eso, deberemos exportar la variable con nuestro array*/

let autos = [{

Marca: "Ford", 
Modelo:  "Fiesta",
Color: "Azul",
AñoDeFabricación : 2019,
CantidadDeKilómetrosRecorridos : 200,
PrecioFinal : 150000, 
CantidadDeCuotas : 12,
Patente : "APL123",
Vendido: "Si"
},{

Marca: "Toyota", 
Modelo:  "Corolla",
Color: "Blanco",
AñoDeFabricación : 2019,
CantidadDeKilómetrosRecorridos :  0,
PrecioFinal : 100000, 
CantidadDeCuotas : 14,
Patente : "JJK116",
Vendido: "No"
},]; 

module.exports = (autos); 

