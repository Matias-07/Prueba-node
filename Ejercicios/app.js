// let PeliculasFav = require("./EjercicioProyecto/peliculas.js"); 

/* for (let i = 0; i < PeliculasFav.length; i++) {
    console.log(PeliculasFav[i]);


let PeliculasString = PeliculasFav.join(" , "); 
console.log(PeliculasString); } 


// Utilizando el método .map() para convertir cada objeto en una cadena legible
let peliculasString = PeliculasFav.map(pelicula => JSON.stringify(pelicula));

// Utilizando el método .join() para unir las cadenas de películas con una coma como separador
console.log(peliculasString.join(' , ')); */ 

/* for (let i = 0; i < PeliculasFav.length; i++) {
    console.log(PeliculasFav[i]);
    }*/

// let fs = require("fs"); 

// let datos = fs.readFileSync(__dirname + "/mensaje.txt", "utf-8")

//console.log(datos);


let datosBici = require("./datosBici.js");

/* Crear una funcionalidad (buscarBici) que reciba por parámetro el (id) de
la bicicleta y devuelva la bici que corresponde. En caso de no
encontrarla, deberá retornar null. Estamos optimizando nuestro código,
por lo que deberíamos utilizar el método filter.*/


let dhBici = {
bicicletas: datosBici,

BuscarBici: function (id){
    let bicicleta = this.bicicletas.filter(function(bicicletas){
        return bicicletas.id == id 
    })
if (bicicleta.length > 0) {
    return bicicleta[0]
} else {
    return null
}}, 
 
/*Crear una funcionalidad de (venderBici) que reciba el (id). En caso de
encontrar la bicicleta, debe asignarle el estado de vendida (si) y retornar
todos los datos de la bicicleta. En el caso de no encontrar la bicicleta,
debe retornar al usuario: “Bicicleta no encontrada”. Puedes aprovechar
la función (buscarBici)*/ 

venderBici: function (id){
    let BiciBuscada = this.BuscarBici(id) 
    if (this.BuscarBici != null ) {
        BiciBuscada.vendida = "si"; 
        return BiciBuscada
    } else {
        return ("bisicleta no encontrda")
    }

},

/*Crear la funcionalidad (biciParaLaVenta). Tendrá la responsabilidad de
devolver todas aquellas bicicletas que aún no estén vendidas. Recuerda
que estamos optimizando nuestro código, por lo que deberíamos utilizar
el método filter.*/

biciParaLaVenta: function(){ 
    let NoVendidas = this.bicicletas.filter(function(bicicleta){
        return bicicleta.vendida == "no"; 
    }); 
    return NoVendidas   

    },

/*Finalmente  Tenemos que desarrollar una funcionalidad
(totalDeVentas) que retorne la suma del valor de todas las ventas
realizadas. Se recomienda utilizar la función reduce.*/ 

TotalDeVentas: function(){
let bicicletasVendidas = this.bicicletas.filter(function(bicicleta){
    return bicicleta.vendida == "si"

})

let VentaTotal = bicicletasVendidas.reduce(function(total, actual){
    return total + actual.precio
})

return VentaTotal

    }


}


console.log(dhBici.biciParaLaVenta());
console.log(dhBici.BuscarBici(10));
console.log(dhBici.venderBici(2));
console.log(dhBici.TotalDeVentas());