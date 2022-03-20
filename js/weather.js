const API_KEY = "df1dbba9c5399967147ced37a51ddaf7";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const name = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        name.innerText = `오늘의 장소 ${data.name}`;
        weather.innerText = `오늘의 날씨 ${data.weather[0].main}`;
        // ${data.main.temp}
    });
}
function onGeoError(){
    alert("위치를 찾을 수 없어요!");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);