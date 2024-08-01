
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/; // Permite solo letras minúsculas y espacios
    return regex.test(texto);
}

// Función para encriptar el texto usando un desplazamiento de 3 caracteres 
function encriptarTextoMarvin(texto) {
    const desplazamiento = 3;
    return texto.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + desplazamiento) % 26 + 'a'.charCodeAt(0));
        } else if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) + desplazamiento) % 26 + 'A'.charCodeAt(0));
        } else {
            return char;
        }
    }).join('');
}

// Función para desencriptar el texto usando un desplazamiento de 3 caracteres 
function desencriptarTextoMarvin(texto) {
    const desplazamiento = 3;
    return texto.split('').map(char => {
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) - desplazamiento + 26) % 26 + 'a'.charCodeAt(0));
        } else if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) - desplazamiento + 26) % 26 + 'A'.charCodeAt(0));
        } else {
            return char;
        }
    }).join('');
}



function asignarTexto (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = (texto);
    return;
}

function encriptarTexto(texto){

    let encriptacion = document.getElementById('textoEncriptar').value;
    if (!validarTexto(encriptacion)){
      mostrarAlerta("alerta","¡Recuerda, el texto no debe llevar mayusculas,ni caracteres especiales!");
    }else{
    let crip = encriptarTextoMarvin(encriptacion);
    document.getElementById('resultado').textContent = crip;
}
}

function desencriptarTexto(texto){

    let desencriptado = document.getElementById('textoEncriptar').value;
    if (!validarTexto(desencriptado)){
        mostrarAlerta("alerta","¡Recuerda, el texto no debe llevar mayusculas,ni caracteres especiales!");
      }else{
    let descrip = desencriptarTextoMarvin(desencriptado);
    document.getElementById('resultado').textContent = descrip;
}
}
function copiarTexto(texto){
    const resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    mostrarAlerta("copiado","Copiado con exito!");
}

function mostrarAlerta(elemento,mensaje) {
    const alerta = document.getElementById(elemento);
    alerta.textContent = mensaje;
    setTimeout(() => {
        alerta.textContent = '';
    }, 2500);
}

asignarTexto("#resultado","¡¡Que esperas para empezar a Encriptar o Desencriptar!!");







