let fs = require ("fs")

let datos = fs.readFileSync(__dirname + "/EjerciciosMetodosYJson.json", "utf-8"); 
// console.log(datos);

let DatosArray = JSON.parse(datos); 
// console.log(DatosArray);

module.exports = (DatosArray); 
