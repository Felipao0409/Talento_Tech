function convertirAMayusculas(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
    nuevoArray.push(array[i].toUpperCase());
    }
    return nuevoArray;
   }
   alert(convertirAMayusculas(["hola", "mundo"]))