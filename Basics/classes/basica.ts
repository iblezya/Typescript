(() => {

  class Hero {
    
    //private name: string;
    //public team: string;
    //public power: number;
    static avgAge: number = 40;

    constructor( 
      private name: string, 
      private team: string, 
      public power?: number 
    ) {}

  }

  const slark: Hero = new Hero( 'Slark', 'Dire', 5000 );
  console.log( slark )
  console.log( Hero.avgAge )

})()