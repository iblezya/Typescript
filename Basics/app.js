"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let HeroStr;
    (function (HeroStr) {
        HeroStr[HeroStr["Acuaman"] = 0] = "Acuaman";
        HeroStr[HeroStr["Batman"] = 1] = "Batman";
        HeroStr[HeroStr["Flash"] = 5] = "Flash";
        HeroStr[HeroStr["Superman"] = 100] = "Superman";
    })(HeroStr || (HeroStr = {}));
    const fuerzaAcuaman = HeroStr.Acuaman;
    const fuerzaBatman = HeroStr.Batman;
    const fuerzaFlash = HeroStr.Flash;
    const fuerzaSuperman = HeroStr.Superman;
    // Retorno de funciones
    const activar_batiseñal = () => {
        return 'activada';
    };
    const pedir_ayuda = () => {
        console.log('Auxilio!!!');
    };
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
