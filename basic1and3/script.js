let weather = Math.floor(Math.random() * 51 - 5);

if (weather <= 10 && weather >= -5) {
    document.write("It is" + " " + weather + " " + "The weather is cold")
} else if (weather <= 16 && weather >= 11) {
    document.write("It is" + " " + weather + " " + "The weather is moderate")
} else if (weather <= 25 && weather >= 12) {
    document.write("It is" + " " + weather + " " + "The weather is nice")
} else if (weather <= 40 && weather >= 26) {
    document.write("It is" + " " + weather + " " + "The weather is hot")
}