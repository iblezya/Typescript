(() => {

  let avenger:any = 123;
  let exists;
  let power;

  avenger = 'Tio drug';
  console.log((avenger as string).charAt(0));

  avenger = 123.123;
  console.log(<number>avenger.toFixed(2));

  console.log(exists);
  console.log(power);

})()