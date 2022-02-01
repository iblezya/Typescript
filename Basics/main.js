"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const names = {
        blez: 'Gerson',
        take: 'Jean',
        bazik: 'Pierre',
        activo: true,
        poder: 1500.4456
    };
    const printName = (names) => {
        console.log(names.bazik);
    };
    const printName2 = (_a) => {
        var { blez } = _a, resto = __rest(_a, ["blez"]);
        console.log(blez, resto);
    };
    printName(names);
    printName2(names);
})();
(() => {
    const name = 'Blez';
    const getName = () => {
        console.log('Hola crags');
    };
})();
//# sourceMappingURL=main.js.map