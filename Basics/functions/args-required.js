"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Mad', 'Max');
    console.log({ name });
})();
