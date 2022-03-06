import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";

//esto se exporta del fichero index.ts de /interfaces
import { Villian, Hero } from "../interfaces";

// printObject('Arg');
// printObject(120);
// printObject(true);
// printObject(['hola','Mundo']);
// printObject(new Date);

// console.log(genericFunction(3.14444456).toFixed(2));

//los siguientes ejemplos no darán error si en la función genericFunction 
//no tiene especificado el tipo de dato
//Ahora devuelve un error porqué se ha especificado que el parametro de entrada, será igual que el de salida
// console.log(genericFunction('Hola Mundo').toFixed(2));
// console.log(genericFunction(new Date()).toFixed(2));

//Ahora si reconoce el tipo de dato:
// console.log(genericFunctionArrow('Hola Mundo').toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate);

const deadpool = {
    name: 'Jame Wilson',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool).realName);