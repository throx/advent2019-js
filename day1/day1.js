function getTestFile(doneCallback) {
    var xhr;

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = handleStateChange;
    xhr.open("GET", "input.txt", true);
    xhr.responseType = "text";
    xhr.send();

    function handleStateChange() {
        if (xhr.readyState === 4) {
            doneCallback(xhr.status == 200 ? xhr.responseText : null);
        }
    }
}

function print(text) {
    var para = document.createElement("p");
    var node = document.createTextNode(text);
    para.appendChild(node);
    document.body.appendChild(para);
}

getTestFile(function(data) {
    var nums = data.split(/\s/);
    
    const PART = 2;
    
    var totalFuel = 0;
    for (let num of nums) {
        var mass = num;
        do {
            let fuel = Math.max(Math.floor(mass / 3) - 2, 0);
            totalFuel += fuel;
            mass = fuel;
        } while (mass > 0 && PART == 2);
    }
    
    print("Total Fuel = " + totalFuel);
    
    console.log(totalFuel);
});
