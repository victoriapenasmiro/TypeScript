(() => {
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?:() => string,
    }

    // una variable puede ser de varios tipo y tener un valor por defecto
    let myCustomVar: string | number | Hero = 'Fernando';

    console.log(myCustomVar);
    console.log(typeof myCustomVar);

    myCustomVar = 20;

    console.log(myCustomVar);
    console.log(typeof myCustomVar);

    myCustomVar = {
        name: 'Bruce',
        age: 43,
        powers: []
    };
    
    console.log(myCustomVar);
    console.log(typeof myCustomVar);

})()