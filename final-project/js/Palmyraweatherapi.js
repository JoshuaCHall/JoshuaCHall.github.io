const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=43.0640&lon=77.2333&units=imperial&APPID=e982e9cdfe3e4734fa904be5f821277e";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('pcurrent-temp')
            .textContent = jsObject.weather[0].description;
        document.getElementById('ptemp')
            .textContent = jsObject.main.temp_max;
            document.getElementById('phumidity')
            .textContent = jsObject.main.humidity;
            document.getElementById('pspeed')
            .textContent = jsObject.wind.speed;

        windChillp();
    });

function windChillp(){
    var temp = parseFloat(document.getElementById('ptemp').textContent);
    var speed = parseFloat(document.getElementById('pspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var chill = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('pchill').innerHTML = Math.round(chill);   

} else {
document.getElementById("pchill").innerHTML = 'N/A';
}
}
