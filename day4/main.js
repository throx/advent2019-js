function isok1(ns) {
    let last = null;
    let seendouble = false;
    for (let i of ns) {
        if (last != null && last > i) {
            return false;
        }
        if (last != null && last == i) {
            seendouble = true;
        }
        last = i;
    }
    return seendouble;
}

function isok2(ns) {
    let last = null;
    let seendouble = false;
    if (ns[0] == ns[1] && ns[1] != ns[2]) { seendouble = true; }
    if (ns[0] != ns[1] && ns[1] == ns[2] && ns[2] != ns[3]) { seendouble = true; }
    if (ns[1] != ns[2] && ns[2] == ns[3] && ns[3] != ns[4]) { seendouble = true; }
    if (ns[2] != ns[3] && ns[3] == ns[4] && ns[4] != ns[5]) { seendouble = true; }
    if (ns[3] != ns[4] && ns[4] == ns[5]) { seendouble = true; }
    if (!seendouble) { return false; }

    for (let i of ns) {
        if (last != null && last > i) {
            return false;
        }
        last = i;
    }
    return true;
}

var p1 = 0;
var p2 = 0;

for (let num = 372304; num < 847060; num++) {
    ns = num.toString();

    // Check good
    if (isok1(ns)) {
        p1++;
    }
    
    if (isok2(ns)) {
        p2++;
    }
}

print("Part 1: " + p1);
print("Part 2: " + p2);
