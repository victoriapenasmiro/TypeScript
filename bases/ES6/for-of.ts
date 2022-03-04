(() => {

    type Avenger = {
        name:string,
        weapon: string,
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }

    const capi: Avenger = {
        name: 'Capitan America',
        weapon: 'Escudo'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjornir'
    }

    const avengers: Avenger[] = [ironman, capi, thor];

    for (const avenger of avengers) {
        console.table(avenger);
        console.log(avenger.name, avenger.weapon);
    }

})()