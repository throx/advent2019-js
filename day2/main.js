getFile("input.txt", function(data) {

    var PART = 2
    
    if (PART == 1) {
        let nums = data.split(/,/).map(Number);
        let proc = new CPU(nums);
    
        nums[1] = 12;
        nums[2] = 1;
    
        proc.run();
    
        print(proc.memory[0]);
    }
    else {
        for (let noun = 0; noun <= 99; noun++) {
            for (let verb = 0; verb <= 99; verb++) {
                let nums = data.split(/,/).map(Number);
                let proc = new CPU(nums);
    
                nums[1] = noun;
                nums[2] = verb;
    
                proc.run();
    
                if (proc.memory[0] == 19690720) {
                    print("Noun = " + noun + ", Verb = " + verb);
                    return;
                }
            }
        }
    }


});