"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3 ? true : false;
    };
    Validations.validateDate = (fecha) => {
        return isNaN(fecha.valueOf());
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Vicky'));
//# sourceMappingURL=main.js.map