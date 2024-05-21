//Array

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numero[2]);

numero.push(11);
console.log(numero)

numero.shift()
console.log(numero)

for (let i = 0; i<10; i++ ){
    console.log(numero[i])
}


//falta hacer el ultimo punto con bucle for

//Objetos literales

let persona = {
    nombre : "Jaz",
    edad : "32",
    cuidad: "Alajuela"
} 

console.log(persona.nombre)

persona.cuidad = "San Jose";
console.log(persona);

persona.ocupacion = "Estudiante";
console.log(persona )

//Funciones

function saludar (nombre){
    console.log(`Hola ${nombre} bienvenida a la tarea numero 5`)
    return;
}
 saludar('Jaz')


 function sumar(a, b) {
   return a + b;
 }
 
 let resultado = sumar(5, 7);
 console.log(resultado); 

//Fecha

const fechaActual = new Date();
console.log(fechaActual);
console.log(fechaActual.getFullYear());


const mes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

const positionAnio = fechaActual.getMonth()
console.log(mes[positionAnio]);

const fechaNueva = new Date('2025-1-01');
console.log(fechaNueva)

// If, Else

let evaluarNota = (numero)=> {
    if (numero >= 5 ){
        console.log(`Su nota es  ${numero} - esta APROBADO`)
    }
    else{
        console.log(`Su nota es ${numero} - esta REPROBADO`)
    }
};

evaluarNota (6);


// For

let frutas = ["Fresa", "Mango", "Uva", "Manzana", "Pera"];


for (let i = 0; i<5; i++ ){
    console.log(frutas[i])
}

let Fresa = frutas.findIndex
    ((value) => value === "Fresa")

    console.log(Fresa, frutas[Fresa]);

let Mango = frutas.findIndex
    ((value) => value === "Mango")

    console.log(Mango, frutas[Mango]);

let Uva = frutas.findIndex
    ((value) => value === "Uva")

    console.log(Uva, frutas[Uva]);

let Manzana = frutas.findIndex
    ((value) => value === "Manzana")

    console.log(Manzana, frutas[Manzana]);

let Pera = frutas.findIndex
    ((value) => value === "Pera")

    console.log(Pera, frutas[Pera]);


let frutasindice = frutas.map((value, i ) => value + i);
console.log(frutasindice);