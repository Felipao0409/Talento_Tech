/*Escribe un programa que tome tres números como entrada y muestre el menor
de los tres.*/

let num1 = parseInt(prompt("digite el numero uno"));
let num2 = parseInt(prompt("digite el numero dos"));
let num3 = parseInt(prompt("digite el numero tres"));

if (num1 > num2) {
    if (num1 > num3) {
        alert("el numero 1 es el mayor: " + num1);
}
}else if (num3 > num2){
    alert("el numero 3 es el mayor: " + num3);
}else{
alert("el numero 2 es el mayor: " + num2);
}