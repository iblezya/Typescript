(() => {

  class Hero {
    
    //private name: string;
    //public team: string;
    //public power: number;
    static avgAge: number = 40;
    static getNameClass() {
      return this.name;
    }

    constructor( 
      private name: string, 
      private team: string, 
      public power?: number 
    ) {}

    public bio(){
      return `${ this.name } (${ this.team })`
    }

  }

  // const slark: Hero = new Hero( 'Slark', 'Dire', 5000 );
  // console.log( slark )
  // console.log( slark.bio() )
  // console.log( Hero.getNameClass() )

})()