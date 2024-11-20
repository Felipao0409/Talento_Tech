const imagenes = document.querySelectorAll("figure img");   // figure

imagenes.forEach(img => {
 img.addEventListener("click", function() {
  
 const caption = img.parentElement.querySelector("figcaption");
 
 caption.innerText = caption.innerText ? "" : img.alt;
 })
}) 