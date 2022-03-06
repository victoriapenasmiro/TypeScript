import { Hero, Hero2 as SuperHero } from "../classes/Hero";
//cuando tenemos un export by default, no es necesario que en el importar el nombre del elemento importado sea igual que en origen
//import powers2, { Power } from "./data/powers";
// import * as HeroClasses from "./classes/Hero"; //exportación de todo el contenido

// en caso de qué una constante tengo el mismo nombre que un import, usaremos Alias
const Hero2 = 123;

const ironman = new Hero('Vicky', 1, 35);
// const ironman = new HeroClasses.Hero('Vicky', 21, 35); //-- en caso de importar todo el fichero con *
//const ironman2 = new SuperHero();

//console.log(powers2[1]);
console.log(ironman);
console.log(ironman.power);







