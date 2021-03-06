const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary testing
        const towns = jsonObject['towns'];
        const idahoTowns = ["Preston"];
        for (let i = 0; i < towns.length; i++) { 
            if (idahoTowns.includes(towns[i].name)) {
            //create variable elements
            let card = document.createElement('section');
            let span = document.createElement('span');
            let h4 = document.createElement('h4');
            let event1 = document.createElement('p');
            let event2 = document.createElement('p');
            let event3 = document.createElement('p');
            
            let image = document.createElement('img');
            //modify the contents
            card.className = 'eventcard';
            h4.textContent = '2020 Events';
            event1.textContent = towns[i].events[0];
            event2.textContent = towns[i].events[1];
            event3.textContent = towns[i].events[2];
            image.setAttribute('src', 'images/PrestonEventImage.jpg');
            image.setAttribute('alt', towns[i].events);
            //Merge them together
            
            span.appendChild(h4);
            span.appendChild(event1);
            span.appendChild(event2);
            span.appendChild(event3);
            card.appendChild(span);
            card.appendChild(image);
            //Attaching to the page
            document.querySelector('div.cityevents').appendChild(card);
        }
        }
    });
    
    

    
