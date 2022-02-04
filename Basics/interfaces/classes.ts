(() => {

  interface Hero {
    name: string;
    team: string;
    skillPower( id: number ): string;
  }
  interface AntiHero {
    age: number
  }

  class Dire implements Hero, AntiHero {
    constructor(
      public name: string,
      public team: string,
      public age: number
    ) {
      
    }
    skillPower(id: number): string {
        return `${this.name} ${this.team}`
    }
  }

})()