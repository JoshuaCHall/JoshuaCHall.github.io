const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473,5607916,5585010&units=imperial&APPID=e982e9cdfe3e4734fa904be5f821277e";


fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp')
            .textContent = jsObject.main.temp;
        document.getElementById('temp')
            .textContent = jsObject.main.temp;
            document.getElementById('humituty')
            .textContent = jsObject.main.temp;
            document.getElementById('speed')
            .textContent = jsObject.main.temp;
        
        
            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);


    });

function windChill(temp, speed);

if (condition) {

} else {
document.getElementById("calc")
}

var