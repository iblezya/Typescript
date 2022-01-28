(() => {

  const fullName = ( firstName: string, lastName?: string, upper: boolean = false): string => {

    if (upper) {
      return `${firstName } ${ lastName || 'no lastname'}`.toUpperCase()
      
    } else {
      return `${firstName } ${ lastName || 'no lastname'}`
    }


  }

  const name = fullName( 'Mad', 'Max')
  console.log({ name })
  const name2 = fullName( 'Mad', 'Max', true)
  console.log({ name2 })

})()