var fs = require("fs")
var CPU = require("./cpu")
var PART = 2

if (PART == 1) {
    let nums = fs.readFileSync(__dirname + '/input.txt', 'utf8').split(/,/).map(Number);
    let proc = new CPU(nums);

    nums[1] = 12;
    nums[2] = 1;

    proc.run();

    console.log(proc.memory[0]);
}
else {
    for (let noun = 0; noun <= 99; noun++) {
        for (let verb = 0; verb <= 99; verb++) {
            let nums = fs.readFileSync(__dirname + '/input.txt', 'utf8').split(/,/).map(Number);
            let proc = new CPU(nums);

            nums[1] = noun;
            nums[2] = verb;

            proc.run();

            if (proc.memory[0] == 19690720) {
                console.log("Noun = " + noun + ", Verb = " + verb);
                return;
            }
        }
    }
}