function TablaDeMultiplicar (){
    console.log("Tabla De Multiplicar");
    console.log("----------------------");
    
    for (let i = 1; i <= 10; i++){
        console.log("1 x " + i + " = " + i * 1);
     } 

     console.log("----------------------");

     for (let i = 1; i <= 10; i++){
        console.log("2 x " + i + " = " + i * 2);
     }

     console.log("----------------------");

     for (let i = 1; i <= 10; i++){
        console.log("3 x " + i + " = " + i * 3);
     }

     console.log("----------------------");

     for (let i = 1; i <= 10; i++){
        console.log("4 x " + i + " = " + i * 4);
     }

     console.log("----------------------");

     for (let i = 1; i <= 10; i++){
        console.log("5 x " + i + " = " + i * 5);
     }

     console.log("----------------------");

     for (let i = 1; i <= 10; i++){
        console.log("6 x " + i + " = " + i * 6);
     }

     console.log("----------------------");

     for (let i = 1; i <= 10; i++){
        console.log("7 x " + i + " = " + i * 7);
     }

     console.log("----------------------");

     for (let i = 1; i <= 10; i++){
        console.log("8 x " + i + " = " + i * 8);
     }

     console.log("----------------------");

     for (let i = 1; i <= 10; i++){
        console.log("9 x " + i + " = " + i * 9);
     }

     console.log("----------------------");

     for (let i = 1; i <= 10; i++){
        console.log("10 x " + i + " = " + i * 10);
     } 
     
     console.log("xxxxxxxxxxxxxxxxxxxxxxxx");

     
     for (let j = 1; j <= 10; j++){
      for (let i = 1; i <= 10; i++){
         console.log( j +"x " + i + " = " + i * j);
      } 
   
      console.log("----------------------");
     }
     
return 
}

function tablaDel (numero){
   for (let i = 1; i <= 10; i++){
      console.log( numero +"x " + i + " = " + i * numero);
   } 

   console.log("-x-x-x-x-x-x-x-x-x-x-x-x");
   return
}

for (let i = 1; i<= 10; i++ ){
   tablaDel(i); 
}




let Tabla = TablaDeMultiplicar(); 
console.log(Tabla);

let numeroImpar = 1

for (let numeroX=0; numeroX < 19;){
     if (numeroImpar % 3 == 0) {
        console.log(numeroImpar);
        numeroX++
    } 
    numeroImpar++

}




