var fs = require("fs")
var Point = require("./point");

var lines = fs.readFileSync(__dirname + '/test1.txt', 'utf8').split('\n');

var field = {};
var x = 0
var y = 0

for (let line of lines) {
    for (let move of line.split(',')) {
        let dir = move.charAt(0);
        let count = parseInt(move.slice(1));

        console.log("Dir " + dir + ", Count " + count);
    }
}
