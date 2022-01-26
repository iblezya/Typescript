"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastname'}`;
    };
    const name = fullName('Mad');
    console.log({ name });
})();
