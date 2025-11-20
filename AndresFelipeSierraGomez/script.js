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