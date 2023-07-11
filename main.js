// Ejercicio 1
console.log('~ ~ ~ ~ ~ Ej: 1 ~ ~ ~ ~ ~');

const num = 89;

function parImpar () {
    if (num % 2 === 0) {
        return console.log(`${num} es par.`);
    }
    else {
            return console.log(`${num} es impar.`);
        }
};

parImpar();

console.log('~ ~ ~ ~ ~ Ej: 2 ~ ~ ~ ~ ~');


// Ejercicio 2

const num1 = 2;
const num2 = 7;

function mayor () {
    if (num1 > num2) {
        return console.log(`${num1} es mayor que ${num2}.`);
    }
    else if (num1 < num2) {
        return console.log(`${num2} es mayor que ${num1}.`);
    }
    else (num1 == num2); {
        return console.log(`Los numeros son iguales.`);
    }
}

mayor();

console.log('~ ~ ~ ~ ~ Ej: 3 ~ ~ ~ ~ ~');


// Ejercicio 3

const num3 = 55;

function multiplo () {
    if (num3 % 5 === 0) {
        return console.log(`${num3} es multiplo de 5.`);
    }
    else (num3 % 5 !== 0); {
        return console.log(`${num3} no es multiplo de 5.`);
    }
}

multiplo();
console.log('~ ~ ~ ~ ~ Ej: 4 ~ ~ ~ ~ ~');


// Ejercicio 4

const num4 = 9;

function adicion() {
    for (let cero = 0; cero <= num4; cero++){
        console.log(cero);
    }
}

adicion();
console.log('~ ~ ~ ~ ~ Ej: 5 ~ ~ ~ ~ ~');

// Ejercicio 5 

let uno = 1;
const num5 = 8;
const nombre = 'Diego'

function imprimePalabra () {
    while (uno <= num5) {
        console.log(nombre);
        uno++;
    }
}

imprimePalabra();
console.log('~ ~ ~ ~ ~ Ej: 6 ~ ~ ~ ~ ~');

// Ejercicio 6 

let conocimientos = ['HTML', 'CSS', 'JavaSript'];

function imprimeConocimientos () {
    for (let i = 0; i < conocimientos.length; i++ ) {
        console.log(conocimientos [i]);
    }
}

imprimeConocimientos();
console.log('~ ~ ~ ~ ~ Ej: 7 ~ ~ ~ ~ ~');

// Ejercicio 7

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function imprimeNumeros () {
    for (let i = 0; i < numeros.length; i++ ) {
        if (i === 4) {
            continue;
        }
        console.log(numeros[i]);
    }
}

imprimeNumeros();
console.log('~ ~ ~ ~ ~ Ej: 8 ~ ~ ~ ~ ~');

// Ejercicio 8 

let numeros1 = [2, 3, 4, 5, 6, 7];
let num7 = 2;

function imprimeMultiplicacion () {
    for (let i = 0; i < numeros1.length; i++){
        console.log(numeros1[i] * num7);
    }
}

imprimeMultiplicacion();

