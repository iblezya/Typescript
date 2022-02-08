
export const printObject = ( argument: any ) => {
  console.log( argument );
}

export function generciFunction<T>( argument: T ) {
  return argument;
}

export const genericFunctionArrow = <T>( argument: T) => argument;