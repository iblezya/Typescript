"use strict";
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatiSignal);
    const heroName = returnName();
    console.log(heroName);
})();
