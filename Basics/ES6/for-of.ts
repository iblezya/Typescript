(() => {

  type Hero = {
    name: string,
    weapon: string
  }

  const slark: Hero = {
    name: 'Slark',
    weapon: 'Dagger'
  }
  const lina: Hero = {
    name: 'Lina',
    weapon: 'Magia'
  }
  const drow: Hero = {
    name: 'Drow Ranger',
    weapon: 'Bow and Arrow '
  }

  const heros: Hero[] = [ slark, lina, drow ]
  for (const hero of heros) {
    console.log( hero.name, hero.weapon )
  }

})()