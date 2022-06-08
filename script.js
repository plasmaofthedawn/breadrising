var centsPerSecond;
var startTime;

var output = document.getElementById("count")

function calculateWage() {
    var current = new Date();
    var seconds = (current.getTime() - startTime)/1000;
    return (seconds * centsPerSecond)/100;
}

function calculateCentsPerSecond() {
    var wage = document.getElementById("wage").value;
    centsPerSecond = wage / 36;
    console.log(centsPerSecond);
}

function calculateStartTime() {
    var start = document.getElementById("start_time").value;
    
    var current = new Date();
    current.setHours(start.split(':')[0], start.split(':')[1], 0);
    console.log(current.toString())
    startTime = current.getTime()
}

function displayWage() {
    var money = calculateWage().toFixed(4)
    output.innerHTML = money;
}

var t = setInterval(displayWage, 10)