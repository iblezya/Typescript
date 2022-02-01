(() => {

  type Name = {
    blez: string,
    take: string,
    bazik: string,
    activo: boolean,
    poder: number
  }

  const names: Name = {
    blez: 'Gerson',
    take: 'Jean',
    bazik: 'Pierre',
    activo: true,
    poder: 1500.4456
  }

  // const { poder, bazik } = names
  // console.log( poder.toFixed(2), bazik.toUpperCase() )

  const printName = ( names: Name ) => {
    console.log(names.bazik)
  }
  const printName2 = ( { blez, ...resto }: Name ) => {
    console.log( blez, resto )
  }

  printName(names)
  printName2(names)

  const namesArr: string[] = ['Raul','Saul','Boul']
  const namesArr2: [ string, boolean, number ] = ['Raul', false, 147.5111]

  // const ral = namesArr[0]
  // console.log(ral)

  const [ ral, blou, numero ] = namesArr2
  // console.log({ ral, blou })

  


})()