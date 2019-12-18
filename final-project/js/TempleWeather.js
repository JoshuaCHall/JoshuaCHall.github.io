//Boston
const BapiURL = "https://api.openweathermap.org/data/2.5/weather?id=4930956&units=imperial&APPID=e982e9cdfe3e4734fa904be5f821277e";


fetch(BapiURL)
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
//Palmyra
const PapiURL = "https://api.openweathermap.org/data/2.5/weather?lat=43.0640&lon=77.2333&units=imperial&APPID=e982e9cdfe3e4734fa904be5f821277e";


fetch(PapiURL)
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
//Frankfurt
const FapiURL = "https://api.openweathermap.org/data/2.5/weather?id=3220802&units=imperial&APPID=e982e9cdfe3e4734fa904be5f821277e";


fetch(FapiURL)
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
//Newport Beach
const NBapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5376890&units=imperial&APPID=e982e9cdfe3e4734fa904be5f821277e";


fetch(NBapiURL)
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


