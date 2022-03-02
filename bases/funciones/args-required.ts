(() => {

    //Parametros obligatorios, si o si TS espera dos argumentos. Si solo enviamos uno se queja
    const fullName = (firstName:string, lastName:(string|number)):string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Tony', 200);

    console.log({ name });

})()