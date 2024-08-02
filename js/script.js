const apikey = "1f157285363c9006d825f250869b4cae";
const user = document.querySelector("#userInput");
const submitButton = document.querySelector("#submit");
const ulMenu = document.querySelector("#menu");

let previous = [];

 
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const searched = {
    city: " ",
  };
  searched["city"] = user.value;
  let latAndLon = {};
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searched.city}&appid=${apikey}`;
  fetch(url).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    
    const urls = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${apikey}&units=imperial`;
    fetch(urls)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      previous.push(data);
      
      localStorage.setItem("previous", JSON.stringify(previous));
      const previousSearched = JSON.parse(localStorage.getItem("previous"));

      const li = document.createElement("li");
      const previousCity = document.createElement("button");
      previousCity.textContent = data.city.name;
      previousCity.setAttribute("class", "previous");
      ulMenu.appendChild(li);
      li.appendChild(previousCity);


      const card = document.querySelector('#card');
      card.innerHTML = "";
      card.innerHTML = `<div class="card mb-4 bg-primary move-left" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img id="img1" src="${`https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`}" class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body text-light text-center">
            <h5 id="city1" class="card-title">${ data.city.name}</h5>
            <p id="date1"class="card-text">${'Today'}</p>
            <p id="temp1" class="card-text">${`Temp: ${data.list[0].main.temp_min}F/ ${data.list[0].main.temp_max}F`}</p>
            <p id="wind1" class="card-text">${`Wind: ${data.list[0].wind.speed} mph`}</p>
            <p id="humid1" class="card-text">${`Humidity: ${data.list[0].main.humidity}%`}</p>
          </div>
        </div>
      </div>
    </div>`;
  
    const date2 = new Date(data.list[5].dt_txt);
    const date3 = new Date(data.list[13].dt_txt);
    const date4 = new Date(data.list[21].dt_txt);
    const date5 = new Date(data.list[29].dt_txt);
    const date6 = new Date(data.list[36].dt_txt);
    const carousel = document.querySelector('#carousel');
    carousel.innerHTML = "";
    carousel.innerHTML = `<div class="display-flex"><h5>5 Day Forecast</h5></div>
    <div class="display-middle">
      <div class="slider">
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a>

        <div class="slides">
          <div id="slide-1">
            <div id="card1">
              
              <div id="date2">${date2.toLocaleDateString()}</div>
              <img id="img2"src="${`https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`}"/>
              <h5 id="city2">${data.city.name}</h5>
              <p id="temp2">${`Temp: ${data.list[5].main.temp_min}F/ ${data.list[5].main.temp_max}F`}</p>
              <p id="wind2">${`Wind: ${data.list[5].wind.speed} mph`}</p>
              <p id="humid2">${`Humidity: ${data.list[5].main.humidity}%`}</p>
            </div>
          </div>
          <div id="slide-2">
            <div id="card1">
              <div id="date3">${date3.toLocaleDateString()}</div>
              <img id="img3" src="${`https://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`}"/>
              <h5 id="city3">${data.city.name}</h5>
              <p id="temp3">${`Temp: ${data.list[13].main.temp_min}F/ ${data.list[13].main.temp_max}F`}</p>
              <p id="wind3">${`Wind: ${data.list[13].wind.speed} mph`}</p>
              <p id="humid3">${`Humidity: ${data.list[13].main.humidity}%`}</p>
            </div>
          </div>
          <div id="slide-3">
            <div id="card1">
              <div id="date4">${date4.toLocaleDateString()}</div>
              <img id="img4"src="${`https://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`}"/>
              <h5 id="city4">${data.city.name}</h5>
              <p id="temp4">${`Temp: ${data.list[21].main.temp_min}F/ ${data.list[21].main.temp_max}F`}</p>
              <p id="wind4">${`Wind: ${data.list[21].wind.speed} mph`}</p>
              <p id="humid4">${`Humidity: ${data.list[21].main.humidity}%`}</p>
            </div>
          </div>
          <div id="slide-4">
            <div id="card1">
              <div id="date5">${date5.toLocaleDateString()}</div>
              <img id="img5" src="${`https://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`}"/>
              <h5 id="city5">${data.city.name}</h5>
              <p id="temp5">${`Temp: ${data.list[29].main.temp_min}F/ ${data.list[29].main.temp_max}F`}</p>
              <p id="wind5">${`Wind: ${data.list[29].wind.speed} mph`}</p>
              <p id="humid5">${`Humidity: ${data.list[29].main.humidity}%`}</p>
            </div>
          </div>
          <div id="slide-5">
            <div id="card1">
              <div id="date6">${date6.toLocaleDateString()}</div>
              <img id="img6" src="${`https://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`}"/>
              <h5 id="city6">${data.city.name}</h5>
              <p id="temp6">${`Temp: ${data.list[36].main.temp_min}F/ ${data.list[36].main.temp_max}F`}</p>
              <p id="wind6">${`Wind: ${data.list[36].wind.speed} mph`}</p>
              <p id="humid6">${`Humidity: ${data.list[36].main.humidity}%`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>`;




     

      previousCity.addEventListener('click', function(event) {
        const temp = previousCity.textContent;
        const searched = JSON.parse(localStorage.getItem('previous'));
        for(let i = 0; i < searched.length; i++){
          if(temp === searched[i].city.name){
            previousSearch(searched[i]);
          }
        }
        
      })
      
    
    });
  const data2 = JSON.parse(localStorage.getItem("previous"));
    });
  });


function previousSearch(data){    
 
  const card = document.querySelector('#card');
  card.innerHTML = "";
  card.innerHTML = `<div class="card mb-4 bg-primary move-left" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img id="img1" src="${`https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`}" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-md-8">
      <div class="card-body text-light text-center">
        <h5 id="city1" class="card-title">${ data.city.name}</h5>
        <p id="date1"class="card-text">${'Today'}</p>
        <p id="temp1" class="card-text">${`Temp: ${data.list[0].main.temp_min}F/ ${data.list[0].main.temp_max}F`}</p>
        <p id="wind1" class="card-text">${`Wind: ${data.list[0].wind.speed} mph`}</p>
        <p id="humid1" class="card-text">${`Humidity: ${data.list[0].main.humidity}%`}</p>
      </div>
    </div>
  </div>
</div>`;

const date2 = new Date(data.list[5].dt_txt);
const date3 = new Date(data.list[13].dt_txt);
const date4 = new Date(data.list[21].dt_txt);
const date5 = new Date(data.list[29].dt_txt);
const date6 = new Date(data.list[36].dt_txt);
const carousel = document.querySelector('#carousel');
carousel.innerHTML = "";
carousel.innerHTML = `<div class="display-flex"><h5>5 Day Forecast</h5></div>
<div class="display-middle">
  <div class="slider">
    <a href="#slide-1">1</a>
    <a href="#slide-2">2</a>
    <a href="#slide-3">3</a>
    <a href="#slide-4">4</a>
    <a href="#slide-5">5</a>

    <div class="slides">
      <div id="slide-1">
        <div id="card1">
          
          <div id="date2">${date2.toLocaleDateString()}</div>
          <img id="img2"src="${`https://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png`}"/>
          <h5 id="city2">${data.city.name}</h5>
          <p id="temp2">${`Temp: ${data.list[5].main.temp_min}F/ ${data.list[5].main.temp_max}F`}</p>
          <p id="wind2">${`Wind: ${data.list[5].wind.speed} mph`}</p>
          <p id="humid2">${`Humidity: ${data.list[5].main.humidity}%`}</p>
        </div>
      </div>
      <div id="slide-2">
        <div id="card1">
          <div id="date3">${date3.toLocaleDateString()}</div>
          <img id="img3" src="${`https://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png`}"/>
          <h5 id="city3">${data.city.name}</h5>
          <p id="temp3">${`Temp: ${data.list[13].main.temp_min}F/ ${data.list[13].main.temp_max}F`}</p>
          <p id="wind3">${`Wind: ${data.list[13].wind.speed} mph`}</p>
          <p id="humid3">${`Humidity: ${data.list[13].main.humidity}%`}</p>
        </div>
      </div>
      <div id="slide-3">
        <div id="card1">
          <div id="date4">${date4.toLocaleDateString()}</div>
          <img id="img4"src="${`https://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png`}"/>
          <h5 id="city4">${data.city.name}</h5>
          <p id="temp4">${`Temp: ${data.list[21].main.temp_min}F/ ${data.list[21].main.temp_max}F`}</p>
          <p id="wind4">${`Wind: ${data.list[21].wind.speed} mph`}</p>
          <p id="humid4">${`Humidity: ${data.list[21].main.humidity}%`}</p>
        </div>
      </div>
      <div id="slide-4">
        <div id="card1">
          <div id="date5">${date5.toLocaleDateString()}</div>
          <img id="img5" src="${`https://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png`}"/>
          <h5 id="city5">${data.city.name}</h5>
          <p id="temp5">${`Temp: ${data.list[29].main.temp_min}F/ ${data.list[29].main.temp_max}F`}</p>
          <p id="wind5">${`Wind: ${data.list[29].wind.speed} mph`}</p>
          <p id="humid5">${`Humidity: ${data.list[29].main.humidity}%`}</p>
        </div>
      </div>
      <div id="slide-5">
        <div id="card1">
          <div id="date6">${date6.toLocaleDateString()}</div>
          <img id="img6" src="${`https://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`}"/>
          <h5 id="city6">${data.city.name}</h5>
          <p id="temp6">${`Temp: ${data.list[36].main.temp_min}F/ ${data.list[36].main.temp_max}F`}</p>
          <p id="wind6">${`Wind: ${data.list[36].wind.speed} mph`}</p>
          <p id="humid6">${`Humidity: ${data.list[36].main.humidity}%`}</p>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

