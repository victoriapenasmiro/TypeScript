(() => {

    let avenger:any = 123;
    let exist;
    let power;

    //estoy cambiando el tipo de dato
    avenger = 'Soy una cadena';
    // console.log(avenger.charAt(0));

    //Ejemplo 1 de casting en tsc para no cambiar el tipo de dato permanentemente
    console.log((avenger as string).charAt(0));

    //estoy cambiando el tipo de dato
    avenger = 150.857676;
    // console.log(avenger.toFixed(2));

    //Ejemplo 2 de casting en tsc para no cambiar el tipo de dato permanentemente
    console.log((<number>avenger).toFixed(2));

    console.log(exist);

})()