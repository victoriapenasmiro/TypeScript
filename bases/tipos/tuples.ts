(() => {

    //una tupla es una array que indica el tipo de dato en cada pos
    //en este ejemplo, en la pos 0 siempre será un string, y en el segundo siempre un number y así sucesivamente
    const hero:[string, number, boolean] = ['Dr Strange', 100, true];

    hero[0] = 50; //error porqué espera un string
    hero[0] = 'Hercules';
    hero[2] = false;

    console.log(hero);

})()