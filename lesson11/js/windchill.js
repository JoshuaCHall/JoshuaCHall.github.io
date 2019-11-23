var temp = parseFloat(document.getElementById("temp").textContent);
var speed = parseFloat(document.getElementById("speed").textContent);
if (temp <= 50 && speed >= 3){
	var chill = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
	document.getElementById("chill").innerHTML = Math.round(chill);
}
else {
	document.write = "N/A";
}