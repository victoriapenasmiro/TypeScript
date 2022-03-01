(() => {

    //indicamos que no retorna nada
    function callBatman():void {
        return 100; //tsc da error porqué no debería retornar nada
        //return; //no da error porqué equivale a return undefined
    }

    const callSuperman = ():void => {
        return null; //tsc da error porqué null es !== a undefined
    }

    const a = callBatman();
    console.log(a); //output: undefined porque callBatman no retorna nada, es void

})()