(() => {

    //para los tipos de datos enum la convención es upercamelCase
    //primera mayúscula de cada palabra que lo compone
    //si no asignamos valor coge por defecto su indice.
    enum AudioLevel {
        min = 1,
        medium, //coge por defecto el siguiente valor después de uno, por tanto vale 2
        max = 10
    }

    let currentAudio: AudioLevel = AudioLevel.medium;

    console.log(currentAudio); //output: 1
    console.log(AudioLevel); //output: {0: 'min', 1: 'medium', 2: 'max', min: 0, medium: 1, max: 2}

})()