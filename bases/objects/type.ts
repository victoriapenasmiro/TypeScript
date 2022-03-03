(() => {

    //definición de un tipo de dato
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?:() => string,
    }

    let flash: Hero = {
        name: "Barry",
        age: 24,
        powers: ['super velovidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {
        name: "Clark",
        age: 24,
        powers: ['super velovidad'],
        getName() {
            return this.name;
        }
    }

})()