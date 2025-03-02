import { Estudiante } from './Estudiante.js';

export const GestorEstudiantes = {
    estudiantes: [],

    crearEstudiante(nombre, edad, nivel) {
        const nuevoEstudiante = new Estudiante(nombre, edad, nivel);
        this.estudiantes.push(nuevoEstudiante);
        console.log("Estudiante creado:", nuevoEstudiante);
    },

    listarEstudiantes() {
        if (this.estudiantes.length === 0) {
            console.log("No hay estudiantes registrados.");
        } else {
            console.log("Lista de estudiantes:");
            for (let estudiante of this.estudiantes) {
                console.log(`${estudiante.id} - ${estudiante.nombre}, ${estudiante.edad} años, Nivel: ${estudiante.nivel}`);
            }
        }
    },

    actualizarEstudiante(id, nuevoNombre, nuevaEdad, nuevoNivel) {
        for (let estudiante of this.estudiantes) {
            if (estudiante.id === id) {
                estudiante.nombre = nuevoNombre;
                estudiante.edad = nuevaEdad;
                estudiante.nivel = nuevoNivel;
                console.log("Estudiante actualizado:", estudiante);
                return;
            }
        }
        console.log("Estudiante no encontrado.");
    },

    eliminarEstudiante(id) {
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id === id) {
                console.log("Estudiante eliminado:", this.estudiantes[i]);
                this.estudiantes.splice(i, 1);
                return;
            }
        }
        console.log("Estudiante no encontrado.");
    }
};
