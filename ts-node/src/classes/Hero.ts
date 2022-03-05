import powers from "../data/powers";

export class Hero {

    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ){}

    get power(): string{
        //Es necesario indicar que es posible que sea null con el operador ?, porqué si
        //llega como null no se podrá recuperar la propiedad .desc
        return powers.find( power => power.id === this.powerId )?.desc || 'not found';

        // Con el simbolo !, le indicamos a tsc que confíe en nuestro criterio, que el codigo nunca va a ser undefined
        // return powers.find( power => power.id === this.powerId )!.desc || 'not found';
    }
}

export class Hero2 {}
export class Hero3 {}
export const PI = 3.14;