(() => {

  class Hero {
    name;
    power;

    constructor( name = 'No name', power = 100 ){
      this.name = name;
      this.power = power;
    }
  }

  class rangeHero extends Hero {
    range;

    constructor( name, power ){
      super( name, power );
      this.range = true;
    }

  }

  const slark = new Hero( 'Slark', 5000 )
  const drow = new rangeHero( 'Drow Ranger', 6000 )

  console.log( slark )
  console.log( drow )
  
})()