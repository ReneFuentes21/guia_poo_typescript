import { Persona } from "./Ejercicio5";

export class Empleado extends Persona{
    sueldo:number
    constructor (nombre:string, apellidos:string, direccion:string, telefono:string, edad:number, sueldo:number){
        super(nombre,apellidos,direccion,telefono,edad)
        this.sueldo = sueldo
    }

    setSueldo(sueldo:number){
        this.sueldo = sueldo
    }

    getSueldo(){
        return`El sueldo del empleado es de $ ${this.sueldo}`
    }

    public getPersona(): void {
        console.log(` El nombre de la persona es ${this.nombre} y sus apellidos son ${this.apellido}
        su direccion es ${this.direccion} y numero de telefono ${this.telefono} tiene la edad de ${this.edad}`)
    }
}