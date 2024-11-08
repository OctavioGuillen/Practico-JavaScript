//1- Introduccion a JavaScript
// Ejercicio 2
let a1 = 5;
let b1 = 10;
let c1 = a1 + b1;
console.log("La suma de a y b es: ", c1);

// Ejercicio 3
let nombre = prompt("Por favor, ingresa tu nombre:");
console.log("Hola, " + nombre + "!");

//2- Operadores logicos y condicionales
//Ejercicio 1
let a2 = 6;
let b2 = 14;
let c2 = Number;
if (a2>b2){
    a2 = c2;
}else{
    b2 = c2;
}
console.log("El mayor de los tres numeros es: ",c2);

//Ejercicio 2
let Par_Impar = prompt("Por favor ingresar un numero");
if (Par_Impar % 2 == 0){
    console.log("El numero ", Par_Impar, "es par");
}else{
    console.log("El numero ", Par_Impar, "es impar");
}