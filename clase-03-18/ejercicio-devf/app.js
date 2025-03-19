// app.js

//Importe de las funciones de viajes.js
import * as viajes from './viajes.js'

// Iniciar la aplicación
const iniciarApp = () => {
    // Ejemplo de cómo registrar destinos
    viajes.registrarDestino("Paris", "2024-06-15", "Avión", "3");
    viajes.registrarDestino("Londres", "2024-07-01", "Tren", "5");
    viajes.registrarDestino("CDMX", "2024-07-12", "Avión", "1");

    // Mostrar el itinerario de los viajes
    viajes.mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();