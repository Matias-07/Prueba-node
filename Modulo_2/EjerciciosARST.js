let ProductosElectrodomesticos = ["heladera","horno","microhondas", "licuadora", "tostadora", "lavarropas"]; 

let UltimaPalabra = ProductosElectrodomesticos.shift()
ProductosElectrodomesticos.push(UltimaPalabra)
ProductosElectrodomesticos.push("Television")
ProductosElectrodomesticos.push("tostadora")

console.log(ProductosElectrodomesticos);
console.log(ProductosElectrodomesticos.length);