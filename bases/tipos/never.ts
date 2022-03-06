(()=> {

    //never no equivale a undefined / void
    //never significa que la función no debe finalizar satisfactoriamente
    const abc = (message: string):never => {
        throw new Error(message)
    }

    //abc('Mi código no se seguirá ejecutando');
    console.log('Este mensaje no se va a mostrar, ya que saltó una excepción al ejecutar abc()');

    //al indicar que el retorno puede ser never o number,
    //indicamos que si se cumple la condición retornará never, sino retornará un numero
    const abc2 = (message: string): (never | number) => {
        if (false) throw new Error(message);

        return 100;
    }

    console.log(abc2('Excepción 2'));

})()