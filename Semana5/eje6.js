/*Escribe un programa que tome un número como entrada y determine si es
positivo, negativo o cero.*/

let num = parseInt(prompt("Digite un número"));

if (num > 0) {
    alert("El número es positivo");
} else if (num < 0) {
    alert("El número es negativo");
} else {
    alert("El número es cero");
}

