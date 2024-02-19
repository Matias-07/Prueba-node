let FigurasColeccionables = require("./collectibles.js")

let collectibles = {
    figuras: FigurasColeccionables,

    /*Desarrollar la funcionalidad (listFigures). Tendrá la responsabilidad de
    mostrar al usuario todos los datos de las diferentes figuras almacenadas.
    Puedes utilizar los métodos forEach() o for…of()*/

    listaDeFiguras: function () {
        let nombresFiguras = [];
        this.figuras.forEach(function (figuras) {
            nombresFiguras.push(figuras.nombre);
        });
        return nombresFiguras;
    },

    /*Crear una funcionalidad (figuresByBrand) que reciba por parámetro la
    marca de la figura. Tendrá la responsabilidad de retornar todas aquellas
    figuras que correspondan a la marca recibida por parámetro. Deberíamos
    utilizar el método filter.*/

    figuresByBrand: function (marca) {
        let marcaFiguras = this.figuras.filter(function (figuras) {
            return figuras.marca == marca;
        })
        return marcaFiguras;
    }
}

let hotToysFigures = collectibles.figuresByBrand("Hot Toys");
console.log(hotToysFigures)

// console.log(collectibles.listaDeFiguras());

// console.log(collectibles.figuras);
