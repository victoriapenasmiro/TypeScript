"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || '---noLastName'}`.toUpperCase();
        else
            return `${firstName} ${lastName || '---noLastName'}`;
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
