let display = document.getElementById('mostrar');

function agregarNumero(number) {
    display.value += number;
}

function agregarNumero(operator) {
    display.value += ' ' + operator + ' ';
}

function verPantalla() {
    display.value = '';
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}