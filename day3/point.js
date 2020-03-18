module.exports = class Point {
    constructor() {
        this.value = [0,0];
    }

    value() {
        return this.value;
    }

    add(point) {
        if (!(point instanceof Point)) {
            throw "Not a point";
        }
        this.value[0] += point.value()[0];
        this.value[1] += point.value()[1];
    }
}