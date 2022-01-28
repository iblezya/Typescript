"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    myFunction = 10;
    console.log(myFunction);
    // *let myFunction: ( x: number, z:number ) => number
    myFunction = addNumber;
    console.log(myFunction(1, 3));
    // *let myFunction: ( y: string ) => string
    myFunction = greet;
    console.log(myFunction(`Hola crag`));
    // *let myFunction: () => string
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
