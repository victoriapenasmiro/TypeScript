"use strict";
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
console.table(batimovil);
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco = (n, t, b, a) => { };
noHaceNadaTampoco = noHaceNada;
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let PoderHeros;
    (function (PoderHeros) {
        PoderHeros[PoderHeros["acuaman"] = 0] = "acuaman";
        PoderHeros[PoderHeros["batman"] = 1] = "batman";
        PoderHeros[PoderHeros["flash"] = 5] = "flash";
        PoderHeros[PoderHeros["superman"] = 100] = "superman";
    })(PoderHeros || (PoderHeros = {}));
    const fuerzaFlash = PoderHeros.flash;
    const fuerzaSuperman = PoderHeros.superman;
    const fuerzaBatman = PoderHeros.batman;
    const fuerzaAcuaman = PoderHeros.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || '---noLastName'}`.toUpperCase();
        else
            return `${firstName} ${lastName || '---noLastName'}`;
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '---noLastName'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 200);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Alexander', 'Kent');
    console.log(superman);
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo está salvado!';
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatisignal = () => {
        return "Batiseñal activada!";
    };
})();
(() => {
    let flash = {
        name: "Barry",
        age: 24,
        powers: ['super velovidad', 'Viajar en el tiempo']
    };
    flash = {
        name: "Hello",
        powers: ['super', 'retro'],
        getNombre() {
            return this.name;
        }
    };
    console.log(flash.getNombre());
})();
(() => {
    let flash = {
        name: "Barry",
        age: 24,
        powers: ['super velovidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: "Clark",
        age: 24,
        powers: ['super velovidad'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVar = 'Fernando';
    console.log(myCustomVar);
    console.log(typeof myCustomVar);
    myCustomVar = 20;
    console.log(myCustomVar);
    console.log(typeof myCustomVar);
    myCustomVar = {
        name: 'Bruce',
        age: 43,
        powers: []
    };
    console.log(myCustomVar);
    console.log(typeof myCustomVar);
})();
(() => {
    let avenger = 123;
    let exist;
    let power;
    avenger = 'Soy una cadena';
    console.log(avenger.charAt(0));
    avenger = 150.857676;
    console.log(avenger.toFixed(2));
    console.log(exist);
})();
(() => {
    const numbers = [1, 2, 3, 4, 8, 9, 10];
    const villians = ['Duende Verde', 'Linterna Roja', 'Malo Malo'];
    villians.forEach(v => console.log(v.toLocaleUpperCase));
})();
(() => {
    let isSuperman = true;
    console.log(isSuperman);
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
    console.log('Este mensaje no se va a mostrar, ya que saltó una excepción al ejecutar abc()');
    const abc2 = (message) => {
        if (false)
            throw new Error(message);
        return 100;
    };
    console.log(abc2('Excepción 2'));
})();
(() => {
    let nada = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 9;
    let villians = 0;
    if (avengers > villians)
        console.log('es mayor');
    else
        console.log('no es mayor');
})();
(() => {
    var _a;
    const Batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(((_a = Batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 50;
    hero[0] = 'Hercules';
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return 100;
    }
    const callSuperman = () => {
        return null;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map