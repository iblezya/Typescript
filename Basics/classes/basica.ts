(() => {

  class Hero {
    
    private name: string;
    public team: string;
    public power: number;
    static avgAge: number = 40;

    constructor( name: string, team: string, power: number ) {
      this.name = name;
      this.team = team;
      this.power = power;
    }

  }

  const slark: Hero = new Hero( 'Slark', 'Dire', 5000 );
  console.log( slark )
  console.log( Hero.avgAge )

})()