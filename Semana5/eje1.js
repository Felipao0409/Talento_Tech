/*Escribe un programa que tome dos números como entrada y muestre el mayor
de los dos.*/

let num1 = parseInt(prompt("Digite el número uno"));
let num2 = parseInt(prompt("Digite el número Dos"));

console.log(typeof(num1), typeof(num2))

if (num1>num2) {
    document.write("el numero uno es mayor: " + num1);

}
else if (num1<num2) { 
    document.write("El número dos es mayor: " + num2);

}else{
    document.write("Los números son iguales");
}

