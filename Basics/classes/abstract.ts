(() => {

  abstract class Hero {
    constructor(
      public name: string,
      public akaName: string
    ) {}
  }

  class Dire extends Hero {
    saludo() {
      return 'The Dire'
    }
  }
  class Radiant extends Hero {
    saludo() {
      return 'The Radiant'
    }
  }

  const slark = new Dire('Slark', 'Sapo')
  const sven = new Radiant('Sven', 'Martillo')
  
  // console.log(slark.saludo())
  // console.log(sven.saludo())

  const printName = ( hero: Hero ) => {
    console.log( hero.name )
  }

  // printName( slark )
  // printName( sven )

})()