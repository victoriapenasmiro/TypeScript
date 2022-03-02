(() => {

    const fullName = (firstName: string, lastName?: (string | number), upper: boolean = false): string => {
        if (upper) return `${firstName} ${lastName || '---noLastName'}`.toUpperCase()
        else return `${firstName} ${lastName || '---noLastName'}`
    }

    const name = fullName('Tony', 'Stark', true);

    console.log({ name });

})()