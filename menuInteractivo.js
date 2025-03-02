import readline from 'readline';
import { GestorEstudiantes } from './GestorEstudiantes.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function mostrarMenu() {
    console.log(`
    --- Menú ---
    1. Crear estudiante
    2. Listar estudiantes
    3. Actualizar estudiante
    4. Eliminar estudiante
    5. Salir
    `);

    rl.question("Selecciona una opción: ", (opcion) => {
        switch (opcion) {
            case "1":
                rl.question("Nombre: ", (nombre) => {
                    rl.question("Edad: ", (edad) => {
                        rl.question("Nivel: ", (nivel) => {
                            GestorEstudiantes.crearEstudiante(nombre, parseInt(edad), nivel);
                            mostrarMenu();
                        });
                    });
                });
                break;

            case "2":
                GestorEstudiantes.listarEstudiantes();
                mostrarMenu();
                break;

            case "3":
                rl.question("ID del estudiante: ", (id) => {
                    rl.question("Nuevo nombre: ", (nombre) => {
                        rl.question("Nueva edad: ", (edad) => {
                            rl.question("Nuevo nivel: ", (nivel) => {
                                GestorEstudiantes.actualizarEstudiante(parseInt(id), nombre, parseInt(edad), nivel);
                                mostrarMenu();
                            });
                        });
                    });
                });
                break;

            case "4":
                rl.question("ID del estudiante a eliminar: ", (id) => {
                    GestorEstudiantes.eliminarEstudiante(parseInt(id));
                    mostrarMenu();
                });
                break;

            case "5":
                rl.close();
                break;

            default:
                console.log("Opción no válida.");
                mostrarMenu();
        }
    });
}

export const iniciarMenu = mostrarMenu;
