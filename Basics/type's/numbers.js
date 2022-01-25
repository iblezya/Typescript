"use strict";
(() => {
    let hoppers = 10;
    console.log(hoppers);
    const emos = 20;
    if (hoppers < emos) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    hoppers = Number('17rap'); // return number: NaN
    console.log({ hoppers });
})();
