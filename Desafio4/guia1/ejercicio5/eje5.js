function obtenerPropiedades(objeto) {
    return Object.keys(objeto);
   }
   alert(obtenerPropiedades({a: 1, b: 2, c: 3}))