(() => {
    
    //ejemplo de arrow function con return omitido
    const addNumbers = (a: number, b:number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo está salvado!';

    //indicamos que almacenará una función
    //let myFunction: Function;

    //indicamos que almacenará una función que espera dos
    //args de tipo number y retornará un number
    // let myFunction: (g:number, z:number) => number; //para addNumbers()
    // let myFunction: (nombre:string) => string; //para greet()
    let myFunction: () => string; //para saveTheWorld()

    //da error porqué espera un funcion con el formato anterior
    // myFunction = 10;
    // console.log(myFunction);

    // myFunction = addNumbers; //si no ponemos los () se asigna la funcion addNumbers por referencia a myFunction, pero no se ejecuta
    // console.log(myFunction(3,2));

    // myFunction = greet;
    // console.log(myFunction('Fernando'));

    myFunction = saveTheWorld;
    console.log(myFunction());

})()