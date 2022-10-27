interface carTypes {
    type: string;
    miles : number;
    status : string;
    drove: boolean;
}

let cars: carTypes[] = [
  {type: "Corolla", miles: 10000, status : "Good", drove: true},
  {type: "Acura", miles: 30000, status: "Running", drove: false},
  {type: "Mercedes", miles: 10000, status: "broken", drove: true},
];

let goodCars: carTypes[] = [];

  for(let i: number = 0; i < cars.length; i++)
  {
    if(cars[i].miles < 20000)
    {
      goodCars.push(cars[i]);
    }
  }


console.log(cars);
console.log(goodCars);


