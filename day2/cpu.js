module.exports = class CPU {
    constructor(memory) {
        this.memory = memory;
        this.ip = 0;

        this.dispatch = {
            1 : () => this.add(),
            2 : () => this.sub()
        }
    }

    add() {
        console.log("Adding");
        this.ip = this.ip + 4;
        console.log("  new ip " + this.ip);
    }

    sub() {
        console.log("Subbing");
        this.ip = this.ip + 4;
    }

    run() {
        console.log("CPU Running");

        while (true) {
            let opcode = this.memory[this.ip];
            console.log("Opcode: " + opcode + " @ " + this.ip);
            if (opcode == 99) {
                return;
            }
            this.dispatch[opcode]();
        }
    }
}