function agregarComentario() {
    const comentario = document.getElementById('comentario');
    const listaComentarios = document.getElementById('listaComentarios');
    let advertencias = document.getElementById('advertencias');

    if (comentario.value === '') {
        advertencias.innerHTML = 'Por favor, ingresa un comentario.';
        return;
    }

    const fechaHora = new Date().toString(); // Obtener la fecha y hora actual

    const nuevoComentario = document.createElement('p');
    nuevoComentario.innerHTML = comentario.value + '.     Fecha y hora: ' + fechaHora; // Agregar la fecha y hora al comentario

    nuevoComentario.classList.add('comentariosPublicados'); // Agregar la clase CSS para el nuevo comentario

    listaComentarios.appendChild(nuevoComentario);

    advertencias.innerHTML = ''; // Limpiar advertencias
    comentario.value = ''; // Limpiar el campo de texto
}


const btnAgregarComentario = document.getElementById("btnAgregarComentario");

btnAgregarComentario.addEventListener('click', agregarComentario);

// Hacer formado de CURP