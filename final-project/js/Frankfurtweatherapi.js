const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3220802&units=imperial&APPID=e982e9cdfe3e4734fa904be5f821277e";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('fcurrent-temp')
            .textContent = jsObject.weather[0].description;
        document.getElementById('ftemp')
            .textContent = jsObject.main.temp_max;
            document.getElementById('fhumidity')
            .textContent = jsObject.main.humidity;
            document.getElementById('fspeed')
            .textContent = jsObject.wind.speed;

        windChillf();
    });

function windChillf(){
    var temp = parseFloat(document.getElementById('ftemp').textContent);
    var speed = parseFloat(document.getElementById('fspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var chill = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('fchill').innerHTML = Math.round(chill);   

} else {
document.getElementById("fchill").innerHTML = 'N/A';
}
}
