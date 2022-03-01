"use strict";
(() => {
    //para los tipos de datos enum la convención es upercamelCase
    //primera mayúscula de cada palabra que lo compone
    //si no asignamos valor coge por defecto su indice.
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio); //output: 1
    console.log(AudioLevel); //output: {0: 'min', 1: 'medium', 2: 'max', min: 0, medium: 1, max: 2}
})();
