function agregarComentario() {
    const comentario = document.getElementById('comentario');
    const listaComentarios = document.getElementById('listaComentarios');
    let advertencias = document.getElementById('advertencias');

    if (comentario.value === '') {
        advertencias.innerHTML = 'Por favor, ingresa un comentario.';
        return;
    }

    const fechaHora = new Date().toString(); // Obtener la fecha y hora actual

    // Crear comentario
    const nuevoComentario = document.createElement('p');
    // Agregar botón de eliminar 
    const btnEliminar = document.createElement('button');
    nuevoComentario.innerHTML = comentario.value + '.     Fecha y hora: ' + fechaHora; // Agregar la fecha y hora al comentario
    btnEliminar.innerHTML = 'Eliminar';

    nuevoComentario.classList.add('comentariosPublicados'); // Agregar la clase CSS para el nuevo comentario
    btnEliminar.classList.add('btnEliminar'); // Agregar clase a botón de eliminar comentario

    listaComentarios.appendChild(nuevoComentario); // Agregar comentario al HTML
    nuevoComentario.appendChild(btnEliminar); // Agregar botón de eliminar a comantario

    advertencias.innerHTML = ''; // Limpiar advertencias
    comentario.value = ''; // Limpiar el campo de texto

    // Botón de eliminar
    btnEliminar.addEventListener('click', () => {
        // Eliminar comentario
        listaComentarios.removeChild(nuevoComentario);
    });
}


const btnAgregarComentario = document.getElementById("btnAgregarComentario");

btnAgregarComentario.addEventListener('click', agregarComentario);

// Hacer formador de CURP