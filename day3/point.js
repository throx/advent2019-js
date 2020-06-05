class Point {
    constructor(x,y) {
        this.value = [x,y];
    }

    toString() {
        return '(' + this.value[0] + ',' + this.value[1] + ')';
    }

    add(point) {
        if (!(point instanceof Point)) {
            throw "Not a point";
        }
		
        return new Point(this.value[0] + point.value[0], this.value[1] + point.value[1]);
    }

    mag() {
        let m = 0;
        for (let i of this.value) {
            m = m + Math.abs(i);
        }
        return m;
    }
}