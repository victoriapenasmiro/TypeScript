"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo --castings
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
