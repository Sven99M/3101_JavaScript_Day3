var arr = [
    ["Martin", 76],
    ["Thomas", 85],
    ["Klaus", 65],
    ["Maria", 93],
    ["David", 81]
]
var sum = 0;
var average = sum / arr.length;
for (var i = 0; i < arr.length; i++) {
    if (arr[i][1] < 60) {
        console.log(`${arr[i][0]} get's an F`);
    } else if (arr[i][1] < 70) {
        console.log(`${arr[i][0]} get's an D`);
    } else if (arr[i][1] < 80) {
        console.log(`${arr[i][0]} get's an C`);
    } else if (arr[i][1] < 90) {
        console.log(`${arr[i][0]} get's an B`)
    } else {
        console.log(`${arr[i][0]} get's an A`)
    }
    sum += arr[i][1];
    console.log("The average Grade is " + average);
}