(() => {

  class Hero {
    constructor(
      public name: string,
      public team: string,
    ) {
      console.log('Constructor Hero invocado!')
    }

    protected getFullName(){
      return `${ this.name } ${ this.team}`
    }
  }

  class AntiHero extends Hero {

    constructor(
      name: string,
      team: string,
      public isCorrupt: boolean
    ) {
      super( name, team )
      console.log('Constructor AntiHero llamado!')
    }

    getFullNameDesdeAntiHero() {
      console.log( super.getFullName() )
    }

  }

  const doom = new AntiHero('Doom','Dire', true)
  console.log(doom)
  doom.getFullNameDesdeAntiHero()

})()