"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    let currentAudio2 = AudioLevel.medium2;
    console.log(AudioLevel);
    console.log(currentAudio);
    console.log(currentAudio2);
})();
