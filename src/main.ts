import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Cabecera } from './Ejercicios/Ejercicio1.ts'
import { Calculadora } from './Ejercicios/Ejercicio2.ts'
import { Cancion } from './Ejercicios/Ejercicio3.ts'
import { Cuenta } from './Ejercicios/Ejercicio4.ts'
import { Persona } from './Ejercicios/Ejercicio5.ts'
import { Empleado } from './Ejercicios/Ejercicio5_2.ts'


//Persona y Empleado
let empleado = new Empleado("Eduardo Ernesto", "Fuentes Benitez", "San Miguel", "7217-2134", 23, 0);
empleado.setSueldo(1000)
console.log(empleado.mayorEdad())
console.log(empleado.getSueldo())
console.log(empleado.getPersona())
//Cuenta
let cuenta = new Cuenta("Rene Fuentes", 0, "Ahorro", 123456)
console.log(cuenta.depositar(10))
console.log(cuenta.retirar(5))
console.log(cuenta.getDatos())


//Cancion
let cancion = new Cancion("Five Nights at Freddy's", "Electronica");
cancion.setAutor("The Living Tombstone")
console.log(cancion.getAutor())
console.log(cancion.getPropiedades())

//Calculadora
let operaciones = new Calculadora(5, 2)
operaciones.factorial(2)

//Cabecera
let cabereca = new Cabecera ("Titulo Nuevo", "Azul", "Comic Sans", "derecha");
console.log(cabereca.getPropiedades())


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
