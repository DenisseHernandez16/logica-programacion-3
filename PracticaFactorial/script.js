let entrada;
let numero;


while (true){
    entrada = prompt("Dame un numero entero positivo: ");
    numero = parseInt(entrada);


    if (!isNaN(numero) && numero >= 0){
        break; 
    }
    alert("El numero que estas ingresando no es valido, porfavor intenta con otro");
}

let factorial = 1;

if (numero === 0 || numero === 1 ){
console.log(factorial);
} else if (numero > 1){
    for (let i = 1; i<= numero; i++){
        factorial = factorial * i 
    }
    console.log(factorial);
} 

