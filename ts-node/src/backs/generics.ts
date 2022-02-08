import { printObject, generciFunction, genericFunctionArrow } from '../generics/generics';
import { Dire, Radiant } from '../interfaces';
// import { Dire } from './interfaces/Dire';
// import { Radiant } from './interfaces/Radiant';


// printObject('Hola crags');
// printObject(new Date());
// printObject( {A:1, B:2, C:3} )

// console.log( generciFunction(3.1416).toFixed(2) )
// console.log( generciFunction( new Date() ).getDate() )
// console.log( genericFunctionArrow( new Date() ).getDate() )

const slark = {
  name: 'Slark',
  realName: 'El Sapo',
  dangerLevel: 150
}

console.log( genericFunctionArrow<Dire>(slark).dangerLevel )