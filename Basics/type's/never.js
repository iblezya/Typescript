"use strict";
(() => {
    // A function returning 'never' cannot have a reachable end point.
    // const abc = (): never => {
    // }
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
})();
