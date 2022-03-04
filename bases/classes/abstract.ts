(() => {

    abstract class Mutante {

        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    //hereda el constructor del padre al no especificar nada
    class Xmen extends Mutante {

        salvarMundo() {
            return 'Mundo a salvo';
        }
    }

    class Villian extends Mutante {

        conquistarMundo() {
            return 'Mundo conquistado!';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Guixe');
    
    //console.log(wolverine.salvarMundo());

    const magneto = new Villian('Magneto', 'kuhoi');

    //console.log(magneto.conquistarMundo());

    //no instancia la clase mutante, sino que espero un objeto que herede de clase Mutante
    const printName = ( character: Mutante ) => {
        console.log(character.realName);
    }

    //printName(wolverine);

})()