(() => {

    interface Cliente {
        name: string,
        age?: number,
        address: Address
        getFullAddress(id: string): void; //las clases que implementen esta interfax tendrá que implementar este método
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
        // podríamos añadir otro objeto con metodos, etc
    }

    //La buena practica es que si una interfaz incorpora
    //objetos con sus propios métodos, atributos, etc, es mejor pasarles a otra interface

    const cliente: Cliente = {
        name: 'Vicky',
        age: 33,
        address: {
            id: 44,
            zip: '12332P',
            city: 'Palma'
        },
        getFullAddress(id: string){
            return this.address.city;
        }
    }

    const cliente2: Cliente = {
        name: 'Rafa',
        age: 56,
        address: {
            id: 11,
            zip: '11032P',
            city: 'Manacor'
        },
        getFullAddress(id: string){
            return id;
        }
    }

    console.log(cliente2.getFullAddress('Hola soy id'));

})()