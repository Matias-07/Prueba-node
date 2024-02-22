

function CalcularDatos (CuentaBancaria = []) {
   let Deposito = 0; 
   let Extraccion = 0; 
   let MontoTotal = 0;
   
   
    for (let i = 0; i < CuentaBancaria.length;i++){
    if (CuentaBancaria[i] >= 0){
        // es un deposito
        Deposito += CuentaBancaria[i]; 
    } else {
        // extracicon
        Extraccion += CuentaBancaria[i];
    }
     
    
        
       // console.log(CuentaBancaria[i]);  
    }

    MontoTotal = Deposito + Extraccion;
    return [Deposito, Extraccion, MontoTotal];
}



function Datos (Nombre, apellido, CuentaBancaria){

    let resultado = CalcularDatos (CuentaBancaria)

    console.log("Estimada/o: " + Nombre + " " + apellido);
    console.log("El monto total de los depositos es: " + resultado[0]);
    console.log("El monto total de los retiros es: "+ resultado[1]);
    console.log("por lo tanto su saldo actual es de: " + resultado [2]);

}

let CuentaBancaria = [1000, -100, 180, 50, 70, -120, -50, 60]; 

// Datos ("Matias", "Ferrari", CuentaBancaria); 

let depositar = (N1,N2) => N1+N2; 
let extraer = (N1,N2) => N1+N2;

function Calcular (CuentaBancaria, calculo) {
    let monto = 0; 
    
    for (let i = 0; i < CuentaBancaria.length;i++){
     if (CuentaBancaria[i] >= 0){
         // es un deposito
         calculo (monto,CuentaBancaria[i]); 
     } else {
         // extracicon
         calculo (monto,CuentaBancaria[i]); 
     }
      
     
         
        // console.log(CuentaBancaria[i]);  
     }
 
     MontoTotal = Deposito + Extraccion;
     return [Deposito, Extraccion, MontoTotal];
 }