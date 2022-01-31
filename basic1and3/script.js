var weather = Math.floor(Math.random() * 51) - 5;

var message = "C. The weather is  "

if (weather <= 0) {
    message += "freezing";
    document.getElementById("weatherIcon").src = "img/freezing.png";

} else if (weather <= 12) {
    message += "cold";
    document.getElementById("weatherIcon").src = "img/cold.png";

} else if (weather <= 20) {
    message += "warm";
    document.getElementById("weatherIcon").src = "img/warm.png";

} else if (weather <= 50) {
    message += "hot"
    document.getElementById("weatherIcon").src = "img/sun.png";

}
document.getElementById("temperature").innerHTML = (weather)
document.getElementById("weatherDisplay").innerHTML = (message)