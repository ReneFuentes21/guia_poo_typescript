export class Calculadora {
    num1:number
    num2:number

    constructor(numero1:number, numero2:number){
        this.num1 = numero1
        this.num2 = numero2
    }

    sumar(){
        let suma = this.num1 + this.num2;
        console.log(suma)
    }

    resta(){
        let resta = this.num1 - this.num2;
        console.log(resta)
    }

    multiplicar(){
        let multi = this.num1 * this.num2;
        console.log(multi)
    }

    dividir(){
        let dividir = this.num1 / this.num2;
        console.log(dividir)
    }

    potencia(){
        let poten = Math.pow(this.num1, this.num2);
        console.log(poten)
    }
    
    factorial(n: number){
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    console.log( result);
}

}