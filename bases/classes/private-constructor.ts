(() => {

    //normalmente un constructor privado se utiliza para controlar la forma en qué sus instancia son realizadas
    //muy útil para utilizar en singleton, es decir usar una sola instancia en toda la aplicación

    class Apocalipsis {

        static instance:Apocalipsis; // standar para almacenar la instancia unica que se utilizará en la app

        //Un constructor privado solo puede ser llamado dentro de la propia clase !!!!
        private constructor(
            public name: string
        ){}

        //Una opción de hacerlo sin que el constructor sea privado
        // constructor(
        //     public name: string
        // ){
        //     return Apocalipsis.instance;
        // }

        static callApocalipsis(){
            if (!Apocalipsis.instance) Apocalipsis.instance = new Apocalipsis('Soy la única instancia de Apocalipsis');
            
            return  Apocalipsis.instance;
        }

        changeName( newName: string ) {
            this.name = newName;
        }
    }

    //Apocalipsis.callApocalipsis() siempre retorna la misma instancia
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    //const apocalipsis = new Apocalipsis('apocalipsis'); ---NO se puede instanciar porqué el constructor es privado

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);

    //como es siempre la misma instancia, el name se verá modificado en todas las const donde se ha guardado la instancia
    apocalipsis1.changeName('Nuevo Nombre');

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})()