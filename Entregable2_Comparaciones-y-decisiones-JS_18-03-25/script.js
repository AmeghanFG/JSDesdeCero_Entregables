// Calculadora de calificaciones 
const nota = 40;

if (nota >= 90) {
    console.log('Excelente, aprobaste con ' + nota);
} else if (nota >= 75 && nota <= 89) {
    console.log('Bien, aprobaste con ' + nota);
} else if (nota >= 60 && nota <= 74) {
    console.log('Suficiente, aprobaste con ' + nota);
} else {
    console.log('Tu nota fue de ' + nota + ', no aprobaste');
}