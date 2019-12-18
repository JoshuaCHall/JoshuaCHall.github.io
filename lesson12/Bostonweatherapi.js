const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4930956&units=imperial&APPID=e982e9cdfe3e4734fa904be5f821277e";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('bcurrent-temp')
            .textContent = jsObject.weather[0].description;
        document.getElementById('btemp')
            .textContent = jsObject.main.temp_max;
            document.getElementById('bhumidity')
            .textContent = jsObject.main.humidity;
            document.getElementById('bspeed')
            .textContent = jsObject.wind.speed;

        windChillb();
    });

function windChillb(){
    var temp = parseFloat(document.getElementById('btemp').textContent);
    var speed = parseFloat(document.getElementById('bspeed').textContent);
  if (temp <= 50 && speed >= 3) {
    var chill = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('bchill').innerHTML = Math.round(chill);   

} else {
document.getElementById("bchill").innerHTML = 'N/A';
}
}
