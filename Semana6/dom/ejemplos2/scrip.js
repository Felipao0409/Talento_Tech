const titulos= document.querySelectorAll('h1');
titulos.forEach(titulo=>{titulo.textContent='nuevo titulo';});



function cambiarColorEsp(indice){
    const cajas=document.querySelectorAll('.caja');
    cajas[indice].style.backgroundColor=colorAleatorio();
}
function colorAleatorio(){
    const letras ='0123456789ABCDEF'
    let color='#';
    for(let i=0; i<6; i++){
        color+=letras[Math.floor(Math.random()*16)];
    }
    return color;
}
function resetear(){
    const cajas=document.querySelectorAll('.caja');
    cajas.forEach(caja => caja.style.backgroundColor='');
    // Resetear tamaño
    cajas.forEach(caja => caja.style.width='100px');
    cajas.forEach(caja => caja.style.height='100px');
    cajas.forEach(caja => caja.textContent='haz click aqui');
    cajas.forEach(caja => caja.style.borderRadius='');
}
function cambiaTodos(){
    const cajas=document.querySelectorAll('.caja');
    cajas.forEach(caja => caja.style.backgroundColor=colorAleatorio());
}
function cambiarBorde(){
    const cajas=document.querySelectorAll('.caja');
    cajas.forEach(caja => caja.style.border='2px solid blue');
}
function cambiarTamano(){
    const cajas=document.querySelectorAll('.caja');
    cajas.forEach(caja => caja.style.width='200px');
    cajas.forEach(caja => caja.style.height='200px');
}
function cambiarColor(elemento){
    elemento.style.backgroundColor = colorAleatorio();
    elemento.textContent = 'cambiado';
}
function circulo(){
    const cajas=document.querySelectorAll('.caja');
    cajas.forEach(caja => caja.style.borderRadius='50%');
}
