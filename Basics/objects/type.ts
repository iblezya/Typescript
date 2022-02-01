(() => {

  type Exx = {
    name: string,
    age?: number,
    skills: string[],
    getName?: () => string
  }

  let oxx: Exx = {
    name: 'Barry Holden',
    age: 23,
    skills: ['str','agi','int']
  }
  
  let vaxx: { name: string, age: number, skills: string[], getName?: () => string } = {
    name: 'MAd Max',
    age: 31,
    skills: ['str','agi']
  }

  

})()