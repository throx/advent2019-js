class CPU {
    constructor(memory) {
        this.memory = memory;
        this.ip = 0;
        this.input = "";
        this.output = "";
        this.modes = [];

        this.dispatch = {
            1 : () => this.add(),
            2 : () => this.mul(),
            3 : () => this.inp(),
            4 : () => this.out(),
            5 : () => this.jt(),
            6 : () => this.jf(),
            7 : () => this.lt(),
            8 : () => this.eq()
        }
    }

    getMemoryImmediate() {
        let val = this.memory[this.ip];
        this.ip++;
        return val;
    }

    getMemory() {
        let addr = this.memory[this.ip];
        this.ip++;
        return this.memory[addr];
    }

    get() {
        switch(this.modes.shift()) {
            case 0:
                return this.getMemory();
            case 1:
                return this.getMemoryImmediate();
        }
        throw("Invalid mode on read");
    }

    setMemory(val) {
        let addr = this.memory[this.ip];
        this.ip++;
        this.memory[addr] = val;
    }

    set(val) {
        switch(this.modes.shift()) {
            case 0:
                this.setMemory(val);
                return;
            case 1:
                throw("Cannot write to immediate memory");
        }
        throw("Invalid mode on write");
    }

    add() {
        let src1 = this.get();
        let src2 = this.get();
        this.set(src1 + src2);
    }

    mul() {
        let src1 = this.get();
        let src2 = this.get();
        this.set(src1 * src2);
    }

    inp() {
        let re = /(\d+),?(.*)/;
        let m = re.exec(this.input);
        this.input = m[2];
        this.set(parseInt(m[1]));
    }

    out() {
        let src = this.get();
        if (this.output.length != 0) { this.output = this.output + ","; }
        this.output = this.output + src;
    }

    jt() {
        let src1 = this.get();
        let src2 = this.get();
        if (src1 != 0) {
            this.ip = src2;
        }
    }

    jf() {
        let src1 = this.get();
        let src2 = this.get();
        if (src1 == 0) {
            this.ip = src2;
        }
    }

    lt() {
        let src1 = this.get();
        let src2 = this.get();
        let res = 0;
        if (src1 < src2) {
            res = 1;
        }
        this.set(res);
    }

    eq() {
        let src1 = this.get();
        let src2 = this.get();
        let res = 0;
        if (src1 == src2) {
            res = 1;
        }
        this.set(res);
    }

    parseModes(op) {
        let opcode = op % 100;
        this.modes = [];
        let modes = Math.floor(op / 100);
        for (let param = 0; param < 3; param++) {
            this.modes.push(modes % 10);
            modes = Math.floor(modes / 10);
        }
        return opcode;
    }

    run() {
        while (true) {
            let opcode = this.getMemoryImmediate();
            opcode = this.parseModes(opcode);
            //console.log("IP: " + this.ip + " OPCODE: " + opcode + " MODES: " + this.modes);
            if (opcode == 99) {
                return;
            }
            this.dispatch[opcode]();
        }
    }
}