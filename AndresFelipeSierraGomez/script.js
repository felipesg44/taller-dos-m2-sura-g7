// Ejercicio 1: Duplicar Números (map)

let puntos = [10, 20, 30, 40];
let puntosDoble = puntos.map(punto => punto * 2);

console.log(puntos);
console.log(puntosDoble);

// Ejercicio 2: Lista de Nombres (map)

let usuarios = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Luis" },
    { id: 3, nombre: "Carlos" }
];

let nombres = usuarios.map(usuario => usuario.nombre);
console.log(nombres);