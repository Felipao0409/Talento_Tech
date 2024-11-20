/*Escribe un programa que tome tres números como entrada y determine cuál es
el número del medio.*/

let num1 = parseInt(prompt("Digite el número uno"));
let num2 = parseInt(prompt("Digite el número dos"));
let num3 = parseInt(prompt("Digite el número tres"));

if (num1 > num2 && num1 < num3) {
    alert("El número del medio es: " + num1);
} else if (num2 > num1 && num2 < num3) {
    alert("El número del medio es: " + num2);
} else if (num3 > num1 && num3 < num2) {
    alert("El número del medio es: " + num3);
} else {
    alert("Los números ingresados no forman un triángulo");
}
