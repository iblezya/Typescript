/* 
tsc : TypeScript compiler
tsc --init : create tsconfig.json
tsc --watch : observer mode
*/

// Anonymous Functions
(() => {
  const a:number = 10;
  let b;

  function sayHello (msg:string) {
    console.log(msg)
  }
  sayHello('Hola crag crag')
})()
