export class Estudiante {
    static contadorId = 1;

    constructor(nombre, edad, nivel) {
        this.id = Estudiante.contadorId++;
        this.nombre = nombre;
        this.edad = edad;
        this.nivel = nivel;
    }
}
