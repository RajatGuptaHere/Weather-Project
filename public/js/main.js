const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "Please enter a city name";
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=06680c01207688221c32149a850c048b`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;
            // conditions to check sunny or cloudy
            if(tempMood === "Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempMood === "Clouds"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color: #f1f2f6;'></i>";
            }
            else if(tempMood === "Rain"){
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
            }
        }
        catch {
            city_name.innerText = "Please enter a valid city name";
        }
    }

}

submitBtn.addEventListener('click', getInfo);