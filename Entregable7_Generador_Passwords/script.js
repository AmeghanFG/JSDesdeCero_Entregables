// Obtener los elementos
const cantidadCaracteres = document.getElementById("cantidadCaracteres");
const valorRango = document.getElementById("valorRango");

// Mostrar el valor inicial del rango
valorRango.innerText = cantidadCaracteres.value;

// Actualizar el valor dinámicamente cuando se ajuste el rango
cantidadCaracteres.addEventListener("input", () => {
    valorRango.innerText = cantidadCaracteres.value;
});

// checkboxs
const checkboxs = document.getElementsByClassName('chk');

// boton generar
const btn_generarContrasena = document.getElementById('btn_generarContrasena');

btn_generarContrasena.addEventListener('click', () => {
    // Obtener el nivel de dificultad
    let barrasDificultad = 0;
    for(let i = 0; i < checkboxs.length; i++) {
        if(checkboxs[i].checked) {
            barrasDificultad++;
        }
    }
    
    // Rellenar barra según la dificultad
    let barras = document.getElementsByClassName('barra');
    for(let c = 0; c < barrasDificultad; c++) {
        barras[c].style = "background-color: #9E00EB; border: #9E00EB solid 0.2em;"
    }

    // TODO: Generar contraseña
    // Obtener elemento donde ira la contraseña
    const password = document.getElementById('password');
    let generatePassword = '';
    let caracteres = '';
    const mensajeCopiar = document.getElementById('mensajeCopiar');

    // Delimitar los caracteres que tendra o no la contraseña
    if (barrasDificultad > 0) {
        if (checkboxs[0].checked) {
            caracteres+= 'abcdefghijklmnopqrstuvwxyz'
        } if (checkboxs[1].checked) {
            caracteres+= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        } if (checkboxs[2].checked) {
            caracteres+= '0123456789'
        } if (checkboxs[3].checked) {
            caracteres+= '+{}[]^!¡¿?#$&%/()=+*~.,_°'
        } 
    } else {
        mensajeCopiar.innerText = 'Selecciona al menos uno de los parametros';
        mensajeCopiar.style = "color: yellow";
    }
    // Obtener la longitud de la contraseña
    const cantidadCaracteres = document.getElementById("cantidadCaracteres");

    // Generar contraseña con la longitud y caracteres seleccionados
    for (let b = 0; b < cantidadCaracteres.value; b++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        generatePassword += caracteres.charAt(indice);
    }

    // Mostrar contraseña
    password.style.color = 'white';
    password.innerHTML = generatePassword;
    /*//Generar contraseña aleatoria
    Math.random(): Devuelve un número decimal pseudoaleatorio mayor o igual a 0 pero estrictamente menor que 1.
    Si deseas generar números en un rango diferente, puedes escalar el resultado. Por ejemplo:
    Math.random() * 10;
    // Esto te dará un número decimal entre 0 y 10 (sin incluir 10).
    } */

});

// Botón para copiar la contraseña
const btn_copiarContrasena = document.getElementById('btn_copiarContrasena');

btn_copiarContrasena.addEventListener('click', async () => {
    const passwordCopiada = document.getElementById('password');
    const mensajeCopiar = document.getElementById('mensajeCopiar');

    if(passwordCopiada.innerText == '' || passwordCopiada.innerText == 'Contraseña prueba') {
        mensajeCopiar.innerHTML = 'No hay nada que copiar';
        mensajeCopiar.style.color = 'yellow';
    } else {
        // Copiar al portapapeles
        try {
            await navigator.clipboard.writeText(passwordCopiada.innerText);
            mensajeCopiar.innerHTML = 'Contraseña copiada al portapapeles, se renovara en 3 segundos';
            passwordCopiada.style.color = 'white';
        } catch (error) {
            console.log('Error al copiar la contraseña: ', error);
            mensajeCopiar.innerHTML = 'Error al copiar la contraseña';
            mensajeCopiar.style.color = 'yellow';
        }
    }
    // Limpiar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeCopiar.innerHTML = '';
        passwordCopiada.style.color = 'black';
    // Limpiar el formulario
        document.getElementById('formParametros').reset();
    // Limpiar las barras de dificultad
        const barras = document.getElementsByClassName('barra');
        for(let c = 0; c < barras.length; c++) {
        barras[c].style = "background-color: trasparent; border: aliceblue solid 0.2em;;"
        }
    }, 3000);
});