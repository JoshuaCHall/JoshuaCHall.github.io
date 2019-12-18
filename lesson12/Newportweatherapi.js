const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5376890&units=imperial&APPID=e982e9cdfe3e4734fa904be5f821277e";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('nbcurrent-temp')
            .textContent = jsObject.weather[0].description;
        document.getElementById('nbtemp')
            .textContent = jsObject.main.temp_max;
            document.getElementById('nbhumidity')
            .textContent = jsObject.main.humidity;
            document.getElementById('nbspeed')
            .textContent = jsObject.wind.speed;

        windChillnb();
    });

function windChillnb(){
    var temp = parseFloat(document.getElementById('nbtemp').textContent);
    var speed = parseFloat(document.getElementById('nbspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var chill = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('nbchill').innerHTML = Math.round(chill);   

} else {
document.getElementById("nbchill").innerHTML = 'N/A';
}
}
