const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  let notas = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const duplicada = notas.find(nota => nota.titulo === titulo);
  if (duplicada) {
    console.log(`Ya existe una nota con el título "${titulo}".`);
    return;
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));

  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    if (notas.length === 0) {
        console.log('No hay notas guardadas.');
        return
    }

    console.log(`Notas : `);
    notas.forEach((nota, index) => {
        console.log(`${index+1}. Titulo: ${nota.titulo}\n ${nota.contenido}`);
    });
    
  } else{
    console.log('No hay archivo de notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    if (notas.length === notasRestantes.length) {
        console.log(`No se encontró ninguna nota con el título "${titulo}".`);
        return;
    }

    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));

    console.log(`Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('No hay archivo de notas guardadas.');
  }
}

// Ejecución de ejemplo
agregarNota('Tareas', 'Completar ejercicios.');
listarNotas();
eliminarNota('Tareas');
listarNotas();
