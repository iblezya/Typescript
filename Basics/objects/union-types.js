"use strict";
(() => {
    let myCustomVariable = 'Blez';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce Lee',
        age: 45,
        skills: [20]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
