const apikey = "1f157285363c9006d825f250869b4cae";
const user = document.querySelector("#userInput");
const submitButton = document.querySelector("#submit");
const ulMenu = document.querySelector("#menu");

let previous = [];

user.addEventListener(
  "keyup",
  (getRsult = async () => {
    const searched = {
      city: " ",
    };

    searched["city"] = user.value;
    let latAndLon = {};

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${searched.city},{US}&&appid=${apikey}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    localStorage.setItem("jsonData", JSON.stringify(jsonData));
  })
  
);

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  let temp = JSON.parse(localStorage.getItem("jsonData"));

  const urls = `http://api.openweathermap.org/data/2.5/forecast?lat=${temp[0].lat}&lon=${temp[0].lon}&cnt=16&appid=${apikey}&units=imperial`;
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

     
      
      let temps = "";
      const date1 = new Date();
      const date2 = new Date(data.list[0].dt_txt);
      const date3 = new Date(data.list[1].dt_txt);
      const date4 = new Date(data.list[2].dt_txt);
      const date5 = new Date(data.list[3].dt_txt);
      const date6 = new Date(data.list[4].dt_txt);
      temps = new Date(date1);
      temps.setDate(date1.getDate() + 1);

      const dt1 = document.querySelector("#date1");
      const dt2 = document.querySelector("#date2");
      const dt3 = document.querySelector("#date3");
      const dt4 = document.querySelector("#date4");
      const dt5 = document.querySelector("#date5");
      const dt6 = document.querySelector("#date6");

      dt1.textContent = 'Today';
    
      dt2.textContent = temps.toLocaleDateString();
      temps = new Date(temps);
      temps.setDate(temps.getDate() + 1);
      dt3.textContent = temps.toLocaleDateString();
      temps = new Date(temps);
      temps.setDate(temps.getDate() + 1);
      dt4.textContent = temps.toLocaleDateString();
      temps = new Date(temps);
      temps.setDate(temps.getDate() + 1);
      dt5.textContent = temps.toLocaleDateString();
      temps = new Date(temps);
      temps.setDate(temps.getDate() + 1);
      dt6.textContent = temps.toLocaleDateString();

      //create image icon for 5 day weather
     // const img1 = document.querySelector("#img1");
      const img2 = document.querySelector("#img2");
      const img3 = document.querySelector("#img3");
      const img4 = document.querySelector("#img4");
      const img5 = document.querySelector("#img5");
      const img6 = document.querySelector("#img6");
      img1.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
      img2.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
      img3.src = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`;
      img4.src = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`;
      img5.src = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`;
      img6.src = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`;
     
      // create title of city for 5 day forecast
      const title1 = document.querySelector("#city1");
      const title2 = document.querySelector("#city2");
      const title3 = document.querySelector("#city3");
      const title4 = document.querySelector("#city4");
      const title5 = document.querySelector("#city5");
      const title6 = document.querySelector("#city6");
      title1.textContent = data.city.name;
      title2.textContent = data.city.name;
      title3.textContent = data.city.name;
      title4.textContent = data.city.name;
      title5.textContent = data.city.name;
      title6.textContent = data.city.name;

      // create temperature high and low
      const temperature1 = document.querySelector("#temp1");
      const temperature2 = document.querySelector("#temp2");
      const temperature3 = document.querySelector("#temp3");
      const temperature4 = document.querySelector("#temp4");
      const temperature5 = document.querySelector("#temp5");
      const temperature6 = document.querySelector("#temp6");
      temperature1.textContent = `Temp: ${data.list[0].main.temp_min}F/ ${data.list[0].main.temp_max}F`;
      temperature2.textContent = `Temp: ${data.list[0].main.temp_min}F/ ${data.list[0].main.temp_max}F`;
      temperature3.textContent = `Temp: ${data.list[1].main.temp_min}F/ ${data.list[1].main.temp_max}F`;
      temperature4.textContent = `Temp: ${data.list[2].main.temp_min}F/ ${data.list[2].main.temp_max}F`;
      temperature5.textContent = `Temp: ${data.list[3].main.temp_min}F/ ${data.list[3].main.temp_max}F`;
      temperature6.textContent = `Temp: ${data.list[4].main.temp_min}F/ ${data.list[4].main.temp_max}F`;

      // create wind speed for forecast
      const wind1 = document.querySelector("#wind1");
      const wind2 = document.querySelector("#wind2");
      const wind3 = document.querySelector("#wind3");
      const wind4 = document.querySelector("#wind4");
      const wind5 = document.querySelector("#wind5");
      const wind6 = document.querySelector("#wind6");

      wind1.textContent = `Wind: ${data.list[0].wind.speed} mph`;
      wind2.textContent = `Wind: ${data.list[0].wind.speed} mph`;
      wind3.textContent = `Wind: ${data.list[1].wind.speed} mph`;
      wind4.textContent = `Wind: ${data.list[2].wind.speed} mph`;
      wind5.textContent = `Wind: ${data.list[3].wind.speed} mph`;
      wind6.textContent = `Wind: ${data.list[4].wind.speed} mph`;
      // create humidty for forecast
      const humidity1 = document.querySelector("#humid1");
      const humidity2 = document.querySelector("#humid2");
      const humidity3 = document.querySelector("#humid3");
      const humidity4 = document.querySelector("#humid4");
      const humidity5 = document.querySelector("#humid5");
      const humidity6 = document.querySelector("#humid6");

      humidity1.textContent = `Humidity: ${data.list[0].main.humidity}%`;
      humidity2.textContent = `Humidity: ${data.list[0].main.humidity}%`;
      humidity3.textContent = `Humidity: ${data.list[1].main.humidity}%`;
      humidity4.textContent = `Humidity: ${data.list[2].main.humidity}%`;
      humidity5.textContent = `Humidity: ${data.list[3].main.humidity}%`;
      humidity6.textContent = `Humidity: ${data.list[4].main.humidity}%`;
      
      previousCity.addEventListener('click', function(event) {
        const temp = previousCity.textContent;
        const searched = JSON.parse(localStorage.getItem('previous'));
        for(let i = 0; i < previous.length; i++){
          if(temp === previous[i].city.name){
            previousSearch(previous[i]);
          }
        }
        
      })
      
    
    });
  const data2 = JSON.parse(localStorage.getItem("previous"));
 
});

function previousSearch(data){    
  let temps = "";
  const date1 = new Date();
  const date2 = new Date(data.list[0].dt_txt);
  const date3 = new Date(data.list[1].dt_txt);
  const date4 = new Date(data.list[2].dt_txt);
  const date5 = new Date(data.list[3].dt_txt);
  const date6 = new Date(data.list[4].dt_txt);
  temps = new Date(date1);
  temps.setDate(date1.getDate() + 1);

  const dt1 = document.querySelector("#date1");
  const dt2 = document.querySelector("#date2");
  const dt3 = document.querySelector("#date3");
  const dt4 = document.querySelector("#date4");
  const dt5 = document.querySelector("#date5");
  const dt6 = document.querySelector("#date6");

  dt1.textContent = 'Today';
  
  dt2.textContent = temps.toLocaleDateString();
  temps = new Date(temps);
  temps.setDate(temps.getDate() + 1);
  dt3.textContent = temps.toLocaleDateString();
  temps = new Date(temps);
  temps.setDate(temps.getDate() + 1);
  dt4.textContent = temps.toLocaleDateString();
  temps = new Date(temps);
  temps.setDate(temps.getDate() + 1);
  dt5.textContent = temps.toLocaleDateString();
  temps = new Date(temps);
  temps.setDate(temps.getDate() + 1);
  dt6.textContent = temps.toLocaleDateString();

  //create image icon for 5 day weather
  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");
  const img3 = document.querySelector("#img3");
  const img4 = document.querySelector("#img4");
  const img5 = document.querySelector("#img5");
  const img6 = document.querySelector("#img6");
  img1.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  img2.src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  img3.src = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`;
  img4.src = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`;
  img5.src = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`;
  img6.src = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`;

  // create title of city for 5 day forecast
  const title1 = document.querySelector("#city1");
  const title2 = document.querySelector("#city2");
  const title3 = document.querySelector("#city3");
  const title4 = document.querySelector("#city4");
  const title5 = document.querySelector("#city5");
  const title6 = document.querySelector("#city6");
  title1.textContent = data.city.name;
  title2.textContent = data.city.name;
  title3.textContent = data.city.name;
  title4.textContent = data.city.name;
  title5.textContent = data.city.name;
  title6.textContent = data.city.name;

  // create temperature high and low
  const temperature1 = document.querySelector("#temp1");
  const temperature2 = document.querySelector("#temp2");
  const temperature3 = document.querySelector("#temp3");
  const temperature4 = document.querySelector("#temp4");
  const temperature5 = document.querySelector("#temp5");
  const temperature6 = document.querySelector("#temp6");
  temperature1.textContent = `Temp: ${data.list[0].main.temp_min}F/ ${data.list[0].main.temp_max}F`;
  temperature2.textContent = `Temp: ${data.list[0].main.temp_min}F/ ${data.list[0].main.temp_max}F`;
  temperature3.textContent = `Temp: ${data.list[1].main.temp_min}F/ ${data.list[1].main.temp_max}F`;
  temperature4.textContent = `Temp: ${data.list[2].main.temp_min}F/ ${data.list[2].main.temp_max}F`;
  temperature5.textContent = `Temp: ${data.list[3].main.temp_min}F/ ${data.list[3].main.temp_max}F`;
  temperature6.textContent = `Temp: ${data.list[4].main.temp_min}F/ ${data.list[4].main.temp_max}F`;

  // create wind speed for forecast
  const wind1 = document.querySelector("#wind1");
  const wind2 = document.querySelector("#wind2");
  const wind3 = document.querySelector("#wind3");
  const wind4 = document.querySelector("#wind4");
  const wind5 = document.querySelector("#wind5");
  const wind6 = document.querySelector("#wind6");

 wind1.textContent = `Wind: ${data.list[0].wind.speed} mph`;
  wind2.textContent = `Wind: ${data.list[0].wind.speed} mph`;
  wind3.textContent = `Wind: ${data.list[1].wind.speed} mph`;
  wind4.textContent = `Wind: ${data.list[2].wind.speed} mph`;
  wind5.textContent = `Wind: ${data.list[3].wind.speed} mph`;
  wind6.textContent = `Wind: ${data.list[4].wind.speed} mph`;
  // create humidty for forecast
  const humidity1 = document.querySelector("#humid1");
  const humidity2 = document.querySelector("#humid2");
  const humidity3 = document.querySelector("#humid3");
  const humidity4 = document.querySelector("#humid4");
  const humidity5 = document.querySelector("#humid5");
  const humidity6 = document.querySelector("#humid6");

  humidity1.textContent = `Humidity: ${data.list[0].main.humidity}%`;
  humidity2.textContent = `Humidity: ${data.list[0].main.humidity}%`;
  humidity3.textContent = `Humidity: ${data.list[1].main.humidity}%`;
  humidity4.textContent = `Humidity: ${data.list[2].main.humidity}%`;
  humidity5.textContent = `Humidity: ${data.list[3].main.humidity}%`;
  humidity6.textContent = `Humidity: ${data.list[4].main.humidity}%`;
  
}

