(() => {

  type Exx = {
    name: string,
    age?: number,
    skills: number[],
    getName?: () => string
  }

  let myCustomVariable: (string | number | Exx) = 'Blez'

  console.log(typeof myCustomVariable)
  
  myCustomVariable = 20
  console.log(typeof myCustomVariable)
  
  myCustomVariable = {
    name: 'Bruce Lee',
    age: 45,
    skills: [20]
  }
  console.log(typeof myCustomVariable)
  console.log(myCustomVariable)



})()