//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//Usa filter() para obtener los productos que cuesten menos de $100
const productosBaratos = productos.filter(producto => producto.precio <= 100);
console.log(productosBaratos);


//Usa sort() para ordenar esos productos alfabéticamente por su nombre.
productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(productos);


//Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const productosNombres = productos.map(producto => producto.nombre);
console.log(productosNombres);

//Extras
const total = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(`El total a pagar es: $${total}`);

const hayEducacion = productos.some(producto => producto.categoria == "Educación");
console.log(`¿Hay productos de Educación? "${hayEducacion}"`);

const todosBaratos = productos.every(producto => producto.precio <= 100);
console.log(`¿Todos los productos son baratos? "${todosBaratos}"`);

const productoBuscado = productos.find(producto => producto.nombre === "Zapatos");
console.log(`Producto encontrado: `, productoBuscado);

