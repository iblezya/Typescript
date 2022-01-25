(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [ string, number, boolean ] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum HeroStr {
      Acuaman = 0,
      Batman = 1,
      Flash = 5,
      Superman = 100,
    }

    const fuerzaAcuaman: HeroStr = HeroStr.Acuaman
    const fuerzaBatman: HeroStr = HeroStr.Batman
    const fuerzaFlash: HeroStr = HeroStr.Flash
    const fuerzaSuperman: HeroStr = HeroStr.Superman
  
    // Retorno de funciones
    const activar_batiseñal= (): string => {
      return 'activada';
    }


  
    const pedir_ayuda = (): void => {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  