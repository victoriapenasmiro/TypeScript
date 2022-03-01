"use strict";
(() => {
    //indicamos que no retorna nada
    function callBatman() {
        return 100; //tsc da error porqué no debería retornar nada
        //return; //no da error porqué equivale a return undefined
    }
    const callSuperman = () => {
        return null; //tsc da error porqué null es !== a undefined
    };
    const a = callBatman();
    console.log(a); //output: undefined porque callBatman no retorna nada, es void
})();
