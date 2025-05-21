 let apiKey = "1e3e8f230b6064d27976e41163a82b77";
let oldDiv = document.querySelector("#container");

async function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city ==="") {
    alert("enter city");
    return;
  }
   oldDiv.innerHTML = ""; 
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&&units=metric&appid=${apiKey}`
    );
    
    const data = await res.json();

    let temp = data.main.temp;

       
        let bgColor = "";
        if (temp < 30) {
            bgColor = "lightblue";   
        } else if (temp < 65) {
            bgColor = "lightyellow";  
        } else {
            bgColor = "lightcoral";   
        }

    let newDiv = document.createElement("div");
    newDiv.innerHTML = ` 
      <p><b>City:</b> ${data.name}</p>
      <p><b>Weather:</b> ${data.weather[0].main}</p>
      <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
      <p><b>Cloudiness:</b> ${data.clouds.all}%</p>
      <p><b>Temperature:</b> ${data.main.temp} °C</p>
      <p><b>Humidity:</b> ${data.main.humidity}%</p>
      <p><b>Coordinates:</b> Lat ${data.coord.lat}, Lon ${data.coord.lon}</p>
     `;
      newDiv.style.backgroundColor = bgColor;
        newDiv.style.padding = "10px";
        newDiv.style.borderRadius = "6px";

    oldDiv.append(newDiv);
  } catch (error) {
    console.error(error);
  }
}

getWeather();



//main system time zone visiblity chodh dena baki sab dikhana hain 


