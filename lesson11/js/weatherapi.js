const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e982e9cdfe3e4734fa904be5f821277e";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        document.getElementById('current-temp')
            .textContent = jsObject.weather[0].description;
        document.getElementById('temp')
            .textContent = jsObject.main.temp_max;
            document.getElementById('humidity')
            .textContent = jsObject.main.humidity;
            document.getElementById('speed')
            .textContent = jsObject.wind.speed;
        
        
            /*const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
        */
        windChill();
    });

function windChill(){
    var temp = parseFloat(document.getElementById('temp').textContent);
    var speed = parseFloat(document.getElementById('speed').textContent);
  if (temp <= 50 && speed >= 3) {
    var chill = 35.74 + temp * 0.6215 - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    document.getElementById('chill').innerHTML = Math.round(chill);   

} else {
document.getElementById('chill').innerHTML = 'N/A';
}
}
