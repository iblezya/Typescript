import { Pokemon } from "./decorators/pokemon-class";

const chamander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pompinchu'
chamander.publicApi = 'https://youtube.com';
console.log(chamander);
