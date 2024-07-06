/*COSAS A ARREGLAR
Estilos del resultado en todos los dispositivos
el boton desencriptar funciona aun cuando el input esta vacio
Arreglar el contenido del input no se salga
*/
function copiarPortapapeles() {
    if (document.getElementById("text-result").textContent.length > 0) {
        navigator.clipboard.writeText(document.getElementById("text-result").textContent);

        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
}


function activarBotones() {
    document.getElementById("btnEncriptar").removeAttribute("disabled", "true");
    document.getElementById("btnEncriptar").setAttribute("class", "button-active");

    document.getElementById("btnDesencriptar").removeAttribute("disabled", "true");
    document.getElementById("btnDesencriptar").setAttribute("class", "button-active");
}

function desActivarBotones() {
    document.getElementById("btnEncriptar").removeAttribute("disabled", "false");
    document.getElementById("btnEncriptar").removeAttribute("class");

    document.getElementById("btnDesencriptar").removeAttribute("disabled", "false");
    document.getElementById("btnDesencriptar").removeAttribute("class");
}

function inputVacio() {
    if (document.getElementById("input-text").value.length > 0) {
        activarBotones();
    } else {
        desActivarBotones();
    }
}

function showEncript(palabra) {
    document.getElementById("input-text").value = "";

    document.getElementById("result").setAttribute("class", "result content-result");

    document.getElementById("text-result").textContent = palabra;
    document.getElementById("text-result").removeAttribute("hidden");

    document.getElementById("default-result").setAttribute("hidden", true);

    desActivarBotones();
}

function encriptar() {
    document.getElementById("text-result").textContent = "";
    let palabra = document.getElementById("input-text").value;

    if (palabra.length <= 0) {
        return;
    }

    let contador = 0;

    let palabraNueva = "";

    while (contador < palabra.length) {
        if (palabra[contador] == "e") {
            palabraNueva += "enter";
        } else if (palabra[contador] == "i") {
            palabraNueva += "imes";
        } else if (palabra[contador] == "a") {
            palabraNueva += "ai";
        } else if (palabra[contador] == "o") {
            palabraNueva += "ober";
        } else if (palabra[contador] == "u") {
            palabraNueva += "ufat";
        } else {
            palabraNueva += palabra[contador];
        }

        contador++;
    }

    showEncript(palabraNueva);
}

function extraerCaracteres(inicio, fin, palabra) {
    let contador = inicio;
    palabraNueva = "";

    if (inicio >= fin) {
        return;
    }

    while (contador < fin) {
        palabraNueva += palabra[contador];
        contador++;
    }

    return palabraNueva;
}

function desencriptar() {
    document.getElementById("text-result").textContent = "";
    let palabra = document.getElementById("input-text").value;
    let contador = 0;
    let palabraNueva = "";

    while (contador < palabra.length) {
        if (palabra[contador] == "e" && extraerCaracteres(contador, contador + 5, palabra) == "enter") {
            palabraNueva += "e";
            contador += 5;
        } else
            if (palabra[contador] == "i" && extraerCaracteres(contador, contador + 4, palabra) == "imes") {
                palabraNueva += "i";
                contador += 4;
            } else
                if (palabra[contador] == "a" && extraerCaracteres(contador, contador + 2, palabra) == "ai") {
                    palabraNueva += "a";
                    contador += 2;
                } else
                    if (palabra[contador] == "o" && extraerCaracteres(contador, contador + 4, palabra) == "ober") {
                        palabraNueva += "o";
                        contador += 4;
                    } else
                        if (palabra[contador] == "u" && extraerCaracteres(contador, contador + 4, palabra) == "ufat") {
                            palabraNueva += "u";
                            contador += 4;
                        } else {
                            palabraNueva += palabra[contador];
                            contador++;
                        }
    }


    return showEncript(palabraNueva);
}

/*Las "llaves" de encriptación que utilizaremos son las siguientes:

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.*/