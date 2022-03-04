(() => {

    class Avenger {

        // ******************** constructor tradicional - forma larga ********************

        //prop privada solo es acceso desde la propia clase
        //private name: string = 'Scott Holland'; //value por defecto

        //prop publica es accesible desde el exterior
        //public team: string;
        //public realName?: string; //atributo opcional

        //las propiedades estaticas son accesibles de forma global a través de la clase, no de la intancia
        static aveAge: number = 35;
        static getClassName() { //recupera el nombre de la clase
            return this.name;
        }

        //realName es opcional
        // constructor(name: string, team: string, realName?: string) {
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }


        // ******************** constructor - forma reducida ********************
        //los atributos que no son estatico se definen dentro del constructor

        constructor(
            private name: string,
            private team: string,
            public realName?: string
        ) {} /*no hago nada cuando instancio*/

        public bio(): string {
            return `${this.name} (${this.team})!!`;
        }

    }

    // console.log(Avenger.aveAge);

    // const antman: Avenger = new Avenger('Antman', 'Capitan', 'James');
    // console.table(antman);
    // console.table(antman.bio());

})()