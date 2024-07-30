
function asignarTexto (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
    return;
}



asignarTexto("#resultado","Que esperas para empezar a encriptar")

