function ejecutarEjemplo1() {
    const parrafo1 = document.querySelector('.parrafo1');
    parrafo1.classList.toggle('resaltado');
    document.getElementById('resultado1').innerHTML = `<p>elemento seleccionado con queryselector
    ('.parrafo1'):</p><code>${parrafo1.outerHTML}</code>`
}