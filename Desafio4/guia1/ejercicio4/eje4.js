function sumarNumeros(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
    suma += array[i];
    }
    return suma;
   }
   alert(sumarNumeros([1, 2, 3, 4]));