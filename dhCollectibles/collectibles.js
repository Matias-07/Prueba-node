let ArchivoHotToys = require("./Datos/figuras1.json");

let ArchivoBandai = require("./Datos/figuras2.json");

let ArchivoStarWars = require("./Datos/figuras3.json");

function DevolverUnArray (HotToys,Bandai,StarWars){
    let TodoJunto = [...HotToys, ...Bandai, ...StarWars]; 
    return TodoJunto   
}

let ArrayTodoJunto = DevolverUnArray(ArchivoHotToys,ArchivoBandai,ArchivoStarWars);   

module.exports = (ArrayTodoJunto); 