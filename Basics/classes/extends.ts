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

    
    public get fullName() : string {
      return `${ this.name } - ${ this.team }`
    }
    
    
    public set fullName(name : string) {
      if ( name.length < 3 ) {
        throw new Error('El nombre debe ser mayor de 3 letras.')
      }

      this.name = name;
    }
    

    getFullNameDesdeAntiHero() {
      console.log( super.getFullName() )
    }

  }

  //const doom = new AntiHero('Doom','Dire', true)
  // console.log(doom.fullName)
  // doom.getFullNameDesdeAntiHero()
  // doom.fullName = 'Blez'
  // console.log(doom.fullName)
})()