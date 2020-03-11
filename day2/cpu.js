module.exports = class CPU {
    constructor(memory) {
        this.memory = memory;
        this.ip = 0;

        this.dispatch = {
            1 : () => this.add(),
            2 : () => this.mul()
        }
    }

    getMemoryImmediate() {
        let val = this.memory[this.ip];
        this.ip = this.ip + 1;
        return val;
    }

    getMemory() {
        let addr = this.memory[this.ip];
        this.ip = this.ip + 1;
        return this.memory[addr];
    }

    setMemory(val) {
        let addr = this.memory[this.ip];
        this.ip = this.ip + 1;
        this.memory[addr] = val;
    }

    add() {
        let src1 = this.getMemory();
        let src2 = this.getMemory();
        this.setMemory(src1 + src2);
    }

    mul() {
        let src1 = this.getMemory();
        let src2 = this.getMemory();
        this.setMemory(src1 * src2);
    }

    run() {
        while (true) {
            let opcode = this.getMemoryImmediate();
            if (opcode == 99) {
                return;
            }
            this.dispatch[opcode]();
        }
    }
}