import { printObject, generciFunction } from './generics/generics';


// printObject('Hola crags');
// printObject(new Date());
// printObject( {A:1, B:2, C:3} )

console.log( generciFunction(3.1416).toFixed(2) )
console.log( generciFunction( new Date() ).toFixed(2) )