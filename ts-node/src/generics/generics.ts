export const printObject = (argument: any) => {
    console.log(argument);
}

//función genérica -- DEVUELVE EL MISMO TIPO DE DATO QUE RECIBE
//T --> Indica que que es de tipo genérico por convención, pero puede ponerse cualquier cosa
export function genericFunction<T>(argument: T):T{
    return argument;
}

export const genericFunctionArrow = <T>(argument: T) => argument;