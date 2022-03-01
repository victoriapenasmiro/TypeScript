(() => {

    const Batman:string = 'Batman';
    const linternaVerde:string = "Linterna Verde";
    const volcanNegro:string = `Héroe: Volcan Negro`;

    //Intento recuperar la letra en la pos 10 de la const Batman, si no existe, retorna "No está presente"
    console.log( Batman[10]?.toUpperCase() || 'No está presente' )
})()