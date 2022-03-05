namespace Validations {

    //para poder ejecutar funciones de un namespace, debe estar como export
    export const validateText = (text: string): boolean => {

        return text.length > 3 ? true : false;
    }

    export const validateDate = (fecha: Date): boolean => {

        return isNaN(fecha.valueOf());
    }

}

console.log(Validations.validateText('Vicky'));