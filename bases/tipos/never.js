"use strict";
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
//# sourceMappingURL=never.js.map