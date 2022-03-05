(() => {

    //un interface es muy parecido a un type

    //¿Cuando utilizar un type o una interfaz?
    //Un TYPE no puede implementarse, una interfaz si es posible

    //Una interfaz es muy usada cuando se van a realizar peticiones HTTP
    //Un type se debe implementar cuando no se vaya a implementar o extender

    // --idem type Hero = {
    interface Hero {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string,
    }

    let flash: Hero = {
        name: "Barry",
        age: 24,
        powers: ['super velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {
        name: "Clark",
        age: 24,
        powers: ['super velocidad'],
        getName() {
            return this.name;
        }
    }

})()