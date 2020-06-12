function process() {

    getFile("input.txt", function(data) {

        let nums = data.split(/,/).map(Number);
        let proc = new CPU(nums);
        proc.input = document.getElementById("input").value;

        proc.run();

        document.getElementById("output").innerHTML = proc.output;
    });

}