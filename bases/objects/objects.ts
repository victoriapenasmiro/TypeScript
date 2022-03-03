(() => {

    let flash: {
        name: string,
        age?: number,
        powers: string[],
        getNombre?: () => string
    } = {
        name: "Barry",
        age: 24,
        powers: ['super velovidad', 'Viajar en el tiempo']
    }

    flash = {
        name: "Hello",
        powers: ['super', 'retro'],
        //name2: "Vicky", //no permitido en TSC, por esta prop no existe en el tipo de dato definido anteriormente.
        getNombre() { //no permitido
            return this.name;
        }
    }

    console.log(flash.getNombre());

})()