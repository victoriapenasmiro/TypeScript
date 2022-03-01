(() => {

    //tsc se queja porqué espera un bool y no un tipo de dato undefined
    //para evitar el warning, se puede poner la siguiente directiva a false "strictNullChecks"
    //Si strictNullChecks = false, un tipo de dato boolean, por ejemplo, permitirá: true, false, null, undefined 
    let nada:boolean = undefined;

    console.log(nada);

})()