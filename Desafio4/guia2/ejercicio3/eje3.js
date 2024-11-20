function crearDiv() {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.backgroundColor = "red";
    nuevoDiv.style.color = "white";
    nuevoDiv.style.textAlign = "center";
    nuevoDiv.innerText = "Javascript permite crear páginas dinámicas.";
    document.body.appendChild(nuevoDiv);
   }