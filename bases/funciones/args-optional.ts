(() => {

    const fullName = (firstName:string, lastName?:(string|number)):string => {
        return `${firstName} ${lastName || '---noLastName'}`;
    }

    const name = fullName('Tony');

    console.log({ name });

})()