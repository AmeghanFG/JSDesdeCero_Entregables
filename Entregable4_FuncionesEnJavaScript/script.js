let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    alert(librosLeidos.join('\n'));
}

let libro;
let opcion;

do {
    libro = prompt('Ingresa el título de un libro.');
    agregarLibro(libro);

    opcion = prompt('¿Ingresa el número de lo que quieras hacer a continuación? 0: Leer la lista de libros, 1: Agregar más libros');
} while (parseInt(opcion) == 1);

mostrarLibrosLeidos();
console.table(librosLeidos);