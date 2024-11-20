/*Escribe un programa que tome una letra como entrada y determine si es vocal o
consonante.*/

let letra = prompt("digite la letra: ");

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    alert("La letra es una vocal");
}else{
    alert("La letra es una consonante");
}