var cars = [
    { type: "Corolla", miles: 10000, status: "Good", drove: true },
    { type: "Acura", miles: 30000, status: "Running", drove: false },
    { type: "Mercedes", miles: 10000, status: "broken", drove: true },
];
var goodCars = [];
function findCars(cars) {
    for (var i = 0; i < cars.length; i++) {
        if (cars[i].miles < 20000) {
            goodCars.push(cars[i]);
        }
    }
}
findCars(cars);
console.log(cars);
console.log(goodCars);
