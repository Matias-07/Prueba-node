// arrays

let Autos = ["Mercedes", "BMW", "Ford", "fiat", "Ferrari", "fiat","fiat"]; 

let UltimoAuto = Autos.pop(); 
console.log(UltimoAuto);

Autos.push("Chevrolet"); 

Autos.shift(); 
Autos.unshift("Lamborghini");

let TodoJunto = Autos.join('   '); 

let Encontrar = Autos.indexOf("fiat");
console.log(Encontrar);

let UltimoAutoEncontrar = Autos.lastIndexOf("fiat");
console.log(UltimoAutoEncontrar);

console.log(Autos); 
console.log(TodoJunto);

let Longitud = Autos.length;
console.log(Longitud); 

console.log(Autos.includes("fiat"));

// strings

let mensaje = " Hola Mundo " 

//console.log(mensaje.slice(mensaje.indexOf("Mundo"), mensaje.length)); 

console.log(mensaje.indexOf("Mundo")); 

console.log(mensaje.slice(5,10));

console.log(mensaje.length);

console.log(mensaje.trim());

console.log(mensaje.split(" "))


// while (mensaje.indexOf("o") != -1){
    console.log(mensaje.replace("o", "@"));
// }

