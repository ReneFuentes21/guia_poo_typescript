type Tipo = "Ahorro" | "Corriente";

export class Cuenta {
    nombre: string
    cantidad: number
    tipo_de_cuenta: Tipo
    numero_de_cuenta: number

    constructor(nombre:string, cantidad:number, tipoCuenta:Tipo, numero:number){
        this.nombre = nombre
        this.cantidad = cantidad
        this.tipo_de_cuenta = tipoCuenta
        this.numero_de_cuenta = numero
    }

    depositar(cantidad:number){
        if(cantidad < 5){
            return "El deposito debe de ser mayor a $5.00"
        } else {
            this.cantidad = cantidad
            return `Usted a depositado exitosamente la cantidad de ${cantidad}`
        }
    }

    retirar(valor:number){
        if(valor > this.cantidad){
            return "No puede realizar retiros de mayor cantidad a la del saldo de la cuenta"
        } else{
            this.cantidad =  this.cantidad - valor
            return `Usted ha retirado la cantidad de ${valor} y el saldo restante en su cuenta es de ${this.cantidad}`
        }
    }

    getDatos(){
        return `Nombre del propietario: ${this.nombre}
        Saldo de la cuenta ${this.cantidad}
        Numero de la cuenta ${this.numero_de_cuenta}
        Tipo de Cuenta ${this.tipo_de_cuenta}`
    }
}