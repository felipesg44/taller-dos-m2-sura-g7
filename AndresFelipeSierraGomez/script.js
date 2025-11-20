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

// Ejercicio 3: Notas Aprobadas (filter)

let notas = [8, 5, 10, 3, 7];
let aprobadas = notas.filter(nota => nota >= 6);

console.log(aprobadas);

// Ejercicio 4: Productos en Stock (filter con objetos)

let productos = [
    { nombre: "Camisa", stock: 10 },
    { nombre: "Zapatos", stock: 0 },
    { nombre: "Pantalón", stock: 5 }
];

let productosEnStock = productos.filter(producto => producto.stock > 0);
console.log(productosEnStock);

// Ejercicio 5: Suma Total de Ventas (reduce)

let ventas = [150, 300, 100, 50];
let totalVentas = ventas.reduce((acumulador, venta) => acumulador + venta, 0);

console.log(totalVentas);

// Ejercicio 6: Aplanar un Arreglo (reduce + concat)

let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];
let listaPlana = grupos.reduce((acumulador, grupo) => acumulador.concat(grupo), []);

console.log(listaPlana);

// Ejercicio 7: Crear una Copia (slice)

let original = ["A", "B", "C"];
let clon = original.slice();
clon.push("D");

console.log(original);
console.log(clon);

// Ejercicio 8: Obtener el Podio (slice)

let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];
let podio = competidores.slice(0, 3);

console.log(podio);

// Ejercicio 9: Unir Equipos (concat)

let equipoDev = ["Ana", "Juan"];
let equipoQA = ["Carlos", "Maria"];
let equipoCompleto = equipoDev.concat(equipoQA);

console.log(equipoCompleto);

// Ejercicio 10: Añadir al Carrito (concat)

let carrito = ["Manzana"];
let nuevoCarrito = carrito.concat("Pera");

console.log(nuevoCarrito);

// Ejercicio 11: Verificar Permiso (includes)

let roles = ["USER", "EDITOR"];
let tieneAdmin = roles.includes("ADMIN");
let tieneEditor = roles.includes("EDITOR");

console.log(tieneAdmin);
console.log(tieneEditor);

// Ejercicio 12: Encontrar Usuario (find)

let usuarios2 = [
    { id: 101, nombre: "Ana" },
    { id: 102, nombre: "Luis" },
    { id: 103, nombre: "Carlos" }
];

let usuarioLuis = usuarios2.find(usuario => usuario.id === 102);
console.log(usuarioLuis);

// Ejercicio 13: Ordenar sin Mutar (sort)

let invitados = ["Zapata", "Alvarez", "Gomez", "Bernal"];
let invitadosOrdenados = [...invitados].sort();

console.log(invitadosOrdenados);

// Ejercicio 14: Invertir sin Mutar (reverse)

let receta = ["Paso 1", "Paso 2", "Paso 3"];
let recetaInversa = [...receta].reverse();

console.log(recetaInversa);