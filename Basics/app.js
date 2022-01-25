"use strict";
/*
tsc : TypeScript compiler
tsc --init : create tsconfig.json
tsc --watch : observer mode
*/
// Anonymous Functions
(() => {
    const a = 10;
    let b;
    function sayHello(msg) {
        console.log(msg);
    }
    sayHello('Hola crag crag');
})();
