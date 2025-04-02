// Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.

// También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'

function Libro(titulo, autor, year, estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.year = year;
    this.estado = estado;
    this.capitulos = [];

    this.describirLibro = function() {
        console.log(`Título: ${this.titulo}, escrito por ${this.autor} en el año ${this.year}, estado: ${this.estado}`);
    }

    this.agregarCaps = function(cap) {
        this.capitulos.push(cap);
        console.log(`Se agrego el capitulo ${cap} a libro ${titulo}`);
    }

    this.quitarUltimoCap = function() {
        this.capitulos.pop();
        console.log(`Se quito el último capitulo`);
    }

    this.quitarCapPorNombre = function(cap) {
        this.capitulos.splice(this.capitulos.indexOf(cap), 1);
    }
}

// Objeto de lista de libros
function ListaLibros(libro) {
    this.lista = [];
    // Método para agregar libros a la lista
    this.agregarLibro = function(libro) {
        this.lista.push(libro);
        console.log(`Se agrego el libro ${libro.titulo}`);
    }
    // Método de busqueda de un libro
    this.busquedaPorNombre = function(titulo) {
        const busqueda = this.lista.filter((libro) => libro.titulo.toLowerCase() == titulo.toLowerCase());
        console.table(busqueda.length > 0 ? busqueda : 'No se encontró el libro');
    }

    // Método de libros por autor
    this.filtradoPorAutor = function(autor) {
        const busqueda = this.lista.filter((libro) => libro.autor.toLowerCase() == autor.toLowerCase());
        console.table(busqueda.length > 0 ? busqueda : 'No se encontraron libros del autor ' + autor);
    }

    // Método para mostrar todos los libros
    this.mostrarLista = function() {
        console.table(this.lista);
    }

    // Método para elimiar libro por nombre
    this.quitarPorNombre = function(titulo) {
        const index = this.lista.findIndex((libro) => libro.titulo.toLowerCase() === titulo.toLowerCase());
        if (index != -1) {
            this.lista.splice(index, 1);
            console.log('Se eliminó con éxito el libro');
        } else {
            console.log('No se encontró el libro');
        }
    }
}

const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible");
const libro2 = new Libro("El Llano en llamas", "Juan Rulfo", 1953, "prestado");
const libro3 = new Libro("Hábitos atómicos", "James Clear", 2018, "disponible");
const libro4 = new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997, "prestado");
const libro5 = new Libro("Harry Potter y la cámara secreta", "J.K. Rowling", 1998, "disponible");
const lista = new ListaLibros();

libro1.describirLibro();
libro2.describirLibro();
libro3.describirLibro();
libro4.describirLibro();

// Agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
libro1.agregarCaps('Capitulo 1');
libro1.agregarCaps('Capitulo 2');
libro1.agregarCaps('Capitulo 3');
libro1.agregarCaps('Capitulo 4');
libro1.quitarUltimoCap();
libro1.quitarCapPorNombre('Capitulo 1');
console.table(libro1);

// Agregar libros a lista
lista.agregarLibro(libro1);
lista.agregarLibro(libro2);
lista.agregarLibro(libro3);
lista.agregarLibro(libro4);
lista.agregarLibro(libro5);

// Buscar libro
lista.busquedaPorNombre('El Llano en llamas');

// Libros por autor
lista.filtradoPorAutor('J.K. Rowling');

// Mostrar lista
lista.mostrarLista();

// Quitar libros de la lista por nombre
lista.quitarPorNombre('El Llano en llamas');

console.log(lista);