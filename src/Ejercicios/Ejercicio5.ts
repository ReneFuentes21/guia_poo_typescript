export abstract class Persona {
    protected nombre: string
    protected apellido: string
    protected direccion: string
    protected telefono: string
    protected edad: number

    constructor(nombre:string, apellido:string, direccion:string, telefono:string, edad:number){
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.telefono = telefono
        this.edad = edad
    }

    mayorEdad(){
        if( this.edad > 18){
            return `Esta persona es mayor de edad`
        }else {
            return `Esta persona es menor de edad`
        }
    }

    public abstract getPersona():void

}