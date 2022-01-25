(() => {

  const eminem:string = 'Eminem';
  const iceCube:string = 'Ice Cube';
  const krsOne:string = `Hopper: sound the police`

  console.log(` The best rapper ${eminem}`)
  console.log(iceCube.toUpperCase())

  console.log(krsOne[100]?.toUpperCase || 'No esta permitido')

})()