(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers:Avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey",
        vision:"Paul Bettany",
        activo: true,
        poder: 1500.988
    }

    // const { poder, vision } = avengers
    // console.log(poder.toFixed(2), vision.toLowerCase())

    //desestructuración de un objeto
    const printAvengers = ({ ironman, ...resto }:Avengers) => {
        console.log(ironman, resto);
    }

    //printAvengers(avengers);

    const avengersArry:string[] = ['Cap. America', 'Ironman', 'Hulk'];

    //desesctructuración de un array
    //Solo nos quedamos con la pos 1
    const [, primeraPos, ] = avengersArry;

    console.log({ primeraPos })


})()