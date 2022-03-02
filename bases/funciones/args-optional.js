"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '---noLastName'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
