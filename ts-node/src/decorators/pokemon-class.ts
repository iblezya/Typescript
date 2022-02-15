function printToConsole ( constructor: Function)  {
  console.log(constructor)
}

const printToConsoleConditional = ( print: boolean = false ): Function => {
  if (print) {
    return printToConsole
  } else {
    return () => {}
  }
}

const blockedPrototype = function( constructor: Function ) {
  Object.seal( constructor )
  Object.seal( constructor.prototype )
}

function CheckValidPokemonId() {
  return function( target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value

    descriptor.value = ( id: number ) => {
      if (id < 1 || id > 800 ) {
        return console.error('El ide del pokemon debe de estar entre 1 y 800')
      } else {
        return originalMethod(id)
      }
    }
  }
}

function readonly( isWritable: boolean = true ): Function {
  return function( target: any, propertyKey: string ) {

    const descriptor : PropertyDescriptor = {
      get(){
        console.log(this)
        return 'Blez'
      },
      set(this, val){
        // console.log(this, val)
        Object.defineProperty( this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        } )
      }
    }

    return descriptor;
  }
}








@blockedPrototype
@printToConsoleConditional()
export class Pokemon {

  @readonly(false)
  public publicApi: string = 'https://pokeapi.co'

  constructor(
    public name: string
  ) {}
  
  @CheckValidPokemonId()
  savePokemonToDB( id: number ) {
    console.log(`Pokemon save to DB ${id}`)
  }

}