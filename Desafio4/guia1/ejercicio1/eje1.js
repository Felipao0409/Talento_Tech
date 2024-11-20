function encontrarNumeroMayor(array) {
    let mayor = array[0];
    for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
    mayor = array[i];
    }
    }
    return mayor;
}
   alert(encontrarNumeroMayor([2, 7, 3, 9, 4])); // Output: 9
