interface starWarsChar {
    name ?: string;
    race : string;
    age : number;
    alive: boolean;
}

let starWars: starWarsChar[] = [
  {name: "Luke", race: "Human", age : 17, alive: true},
  {race: "Jabba", age : 400, alive : false}

];

console.log(starWars);
