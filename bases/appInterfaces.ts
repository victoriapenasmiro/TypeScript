// Crear interfaces

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean,
  comer?: boolean,
  llorar?: boolean
}

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir: ( guason: Guason ) => void = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

// Cree una interfaz para la siguiente funcion
interface Ciudad {
  (ciudadanos: string[]): number;
}

const ciudadGotica: Ciudad = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

enum Sexo {
  femenino = 'F',
  masculino = 'M',
  noBinario = 'N'
}

interface Human {
  nombre: string;
  edad: number;
  sexo: Sexo;
  estadoCivil: boolean; // -- 0 soltero, 1 casado
  imprimirBio(): void // en consola una breve descripcion.
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Human{

  constructor (
    public nombre: string,
    public edad: number,
    public sexo: Sexo,
    public estadoCivil: boolean
  ){}

  imprimirBio(): void {
      console.log('implementando interface Human');
  }
}

const Vicky = new Persona('Vicky', 31, Sexo.femenino, true);