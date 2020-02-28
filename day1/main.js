var fs = require("fs")

var nums = fs.readFileSync(__dirname + '/input.txt', 'utf8').split(/\s/);

const PART = 2;

var totalFuel = 0;
for (let num of nums) {
    var mass = num;
    do {
        let fuel = Math.max(Math.floor(mass / 3) - 2, 0);
        totalFuel += fuel;
        mass = fuel;
    } while (mass > 0 && PART == 2);
}

console.log(totalFuel);