(() => {

    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ) {
            console.log("Constructor Avenger llamado");
        }

        private getFullName() {
            ` ${this.name} ${this.realName} `;
        }
    }

    //si el constructor de Xmen no existe, coge por defecto el de Avenger
    class Xmen extends Avenger {

        constructor(
            name: string, //no indicamos si son public o private, porqué ya está definido en la clase padre
            realName: string,  //no indicamos si son public o private, porqué ya está definido en la clase padre
            public isMutant: boolean
        ){
            //super() debe ser la primera linea ejecutada en un constructor
            super(name, realName); //hereda el constructor del padre
            console.log('contrustor XMEN llamado');
        }

        getFullNamedesdeXmen(){
            //super().getFullName(); //no es accesible porqué es privado
        }

        //getter
        get fullName(){
            return `${ this.name } - ${ this.realName }`
        }

        //setter --solo puede recibir un arg
        set fullName( name: string ){

            if ( name.length < 3 ) throw new Error ('El nombre debe ser mayor a 3 letras');
            
            this.name = name;
        }

    }

    const wolveri = new Xmen('wolveri', 'Logan', true);
    console.log(wolveri.fullName); //No hace falta ejecutarlo con (), porqué lo getters no lo necesitan

    wolveri.fullName = 'Fernando';

    console.log(wolveri.fullName);

})()