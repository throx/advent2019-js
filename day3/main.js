getFile("input.txt", function(data) {

    var lines = data.split('\n');
    
    var field = {};
    var cross = [];
    var wire = 0;
    
    for (let line of lines) {
        wire = wire + 1;
        var dist = 0;
        var pos = new Point(0, 0);

        for (let move of line.split(',')) {
            let dir = move.charAt(0);
            let count = parseInt(move.slice(1));
    
            //console.log("Wire " + wire + ", Dir " + dir + ", Count " + count);
            
            for (let i = 0; i < count; ++i) {
                switch(dir) {
                case "U":
                    pos = pos.add(new Point(0, -1));
                    break;
                case "D":
                    pos = pos.add(new Point(0, 1));
                    break;
                case "L":
                    pos = pos.add(new Point(-1, 0));
                    break;
                case "R":
                    pos = pos.add(new Point(1, 0));
                    break;
                }
                
                //console.log("  At: " + pos.value);
                //console.log(field);
                dist = dist + 1;
                
                let info = field[pos];
                if (info == undefined) {
                    info = { "wire": wire, "dist": dist };
                }
                if (info.wire != wire) {
                    cross.push({"pos":pos, "dist": info.dist + dist});
                }
                field[pos] = info;
            }
        }
    }
    
    var min = 10000000;
    var min2 = min;
    for (let c of cross) {
        if (min > c.pos.mag()) {
            min = c.pos.mag();
        }
        if (min2 > c.dist) {
            min2 = c.dist;
        }
    }
    console.log("Closest Cross = " + min);
    print("Closest Cross = " + min);
    
    console.log("Shortest Cross = " + min2);
    print("Shortest Cross = " + min2);
    
});
