// dato del tipo number 
let Edad = 16;
console.log (Edad); 

// dato del tipo con decimales 

let precio = 245; 
console.log (precio); 

// dato del tipo string con comillas dobles 

let nombre = "Matias"; 
console.log (nombre); 

// dato del string con comillas simples 

let apellido = 'Ferrari'; 
console.log (apellido); 

// dato booleano con valor true 

let verdadero = true 
console.log (true) 

// dato booleano con valor falso 

let falso = false 
console.log (false) 

// dato NaN

let NotANumber = NaN; 
console.log (NaN); 

// dato null 

let nulo = null; 
console.log (nulo); 

// dato undefinded

let SinValor; 
console.log (SinValor); 

// dato del tipo objeto literal 

let persona = {
    nombre: "Matias", 
    edad: 16, 
    apariencia: "Atractivo"
};

console.log (persona); 

// dato del tipo array 

let paises = [
    'Argentina', 
    'Colombia',
    'Venezuela'
];

console.log (paises); 

let auto = {
    marca: "Ford", 
    km: 1000, 
    disponible: true, 
    bocina: () => console.log("Beep beep"), //function
   };

   console.log (auto); 


   var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}