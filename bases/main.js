"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
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
    const magneto = new Villian('Magneto', 'kuhoi');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getClassName() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})!!`;
        }
    }
    Avenger.aveAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado");
        }
        getFullName() {
            ` ${this.name} ${this.realName} `;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('contrustor XMEN llamado');
        }
        getFullNamedesdeXmen() {
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3)
                throw new Error('El nombre debe ser mayor a 3 letras');
            this.name = name;
        }
    }
    const wolveri = new Xmen('wolveri', 'Logan', true);
    console.log(wolveri.fullName);
    wolveri.fullName = 'Fernando';
    console.log(wolveri.fullName);
})();
(() => {
})();
//# sourceMappingURL=main.js.map