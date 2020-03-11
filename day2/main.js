var fs = require("fs")
var CPU = require("./cpu")

var nums = fs.readFileSync(__dirname + '/input.txt', 'utf8').split(/,/).map(Number);
var proc = new CPU(nums);

proc.run();

console.log(proc.memory[0]);