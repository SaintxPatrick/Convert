function getKey(k : boolean) {
  return `a key named ${k}`;
}

let Obj = {
    id : 5,
    name: 'North Pole',
    [getKey(true)] : true,
};

console.log(Obj);

