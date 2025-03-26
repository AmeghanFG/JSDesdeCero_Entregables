let frutasConTipo = [
    { nombre: "Naranja", tipo: "Cítrico" },
    { nombre: "Manzana", tipo: "Pomácea" },
    { nombre: "Plátano", tipo: "Tropical" },
    { nombre: "Uva", tipo: "Baya" },
    { nombre: "Fresa", tipo: "Baya" },
    { nombre: "Piña", tipo: "Tropical" },
    { nombre: "Mango", tipo: "Tropical" },
    { nombre: "Cereza", tipo: "Drupa" },
    { nombre: "Pera", tipo: "Pomácea" },
    { nombre: "Sandía", tipo: "Cucurbitácea" },
    { nombre: "Melón", tipo: "Cucurbitácea" },
    { nombre: "Durazno", tipo: "Drupa" },
    { nombre: "Coco", tipo: "Drupa" },
    { nombre: "Kiwi", tipo: "Baya" },
    { nombre: "Limón", tipo: "Cítrico" }
];


let citricos = frutasConTipo.filter((fruta) => fruta.tipo == 'Cítrico').length;
let pomaceas = frutasConTipo.filter((fruta) => fruta.tipo == 'Pomácea').length;
let tropicales = frutasConTipo.filter((fruta) => fruta.tipo == 'Tropical').length;
let drupas = frutasConTipo.filter((fruta) => fruta.tipo == 'Drupa').length;
let cucurbitaceas = frutasConTipo.filter((fruta) => fruta.tipo == 'Cucurbitácea').length;

console.log(citricos);
console.log(pomaceas);
console.log(tropicales);
console.log(drupas);
console.log(cucurbitaceas);