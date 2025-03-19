// viajes.js

// Array para guardar los destinos
export const destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte, personas) => {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        personas,
        costo: calcularCosto(destino, transporte, personas)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
export const calcularCosto = (destino, transporte, personas) => {
    let costoBase = 0;

    // Costo base por destino
    switch (destino) {
        case "Paris":
            costoBase = 500;
            break;
        case "Londres":
            costoBase = 400;
            break;
        case "New York":
            costoBase = 600;
            break;
        case "CDMX":
            costoBase = 200;
            break;
        default:
            console.log("Destino no registrado, asignando costo base de $300.");
            costoBase = 300;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    // Descuento por pasajeros
    let descuento = 0;
    if (personas >= 5) {
        descuento = 0.1; // 10% de descuento
    } else if (personas >= 3) {
        descuento = 0.05; // 5% de descuento
    }

    costoBase = costoBase * personas * (1 - descuento);

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    if (destinos.length === 0) {
        console.log("No hay viajes registrados.");
        return;
    }

    destinos.forEach(({ destino, fecha, transporte, personas, costo }) => {
        console.log(`
        📍 Destino: ${destino}
        📅 Fecha: ${fecha}
        🚗 Transporte: ${transporte}
        👥 Personas: ${personas}
        💰 Costo: ${costo}
        ---------------------------`);
    });
}