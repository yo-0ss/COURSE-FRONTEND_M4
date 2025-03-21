
const listaDeCompras = [];

const agregarProducto = (producto) => {
    if (listaDeCompras.includes(producto)) {
        console.log(`${producto} ya está en la lista.`);
    } else {
        listaDeCompras.push(producto);
        console.log(`${producto} ha sido agregado a la lista.`);
    }
}

const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`${producto} ha sido eliminado de la lista.`);
    } else {
        console.log(`${producto} no está en la lista.`);
    }
}

const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía.");
    } else {
        console.log("Lista de Compras:");
        listaDeCompras.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto}`);
        });
    }
}

agregarProducto("Manzanas");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Manzanas"); 
mostrarLista();
eliminarProducto("Leche");
eliminarProducto("Huevos"); 
mostrarLista();
