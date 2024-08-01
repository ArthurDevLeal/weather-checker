let btn = document.querySelector(".busca button");

document.querySelector(".busca").addEventListener("submit", async (event) => {
    let input = document.querySelector("#searchInput");
    event.preventDefault();

    if (input.value.length > 0) {
        showWarning("Carregando...");

        let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_key}`);
        let jsonData = await req.json();

        if (jsonData.cod === 200) {
            let tempC = (jsonData.main.temp - 273).toFixed(2);
            let wind = jsonData.wind.speed;
            let nameCity = jsonData.name;
            let country = jsonData.sys.country;
            let windAngle = jsonData.wind.deg - 90;
            let tempIcon = jsonData.weather[0].icon;
            updateMenu(tempC, wind, nameCity, country, windAngle, tempIcon);
        } else {
            showWarning("Nao encontramos essa cidade");
        }
    }
});
function showWarning(msg) {
    let aviso = document.querySelector(".aviso");
    aviso.innerHTML = msg;
}
function updateMenu(temp, wind, nameCity, country, angle, icon) {
    let Result = document.querySelector(".resultado");
    let Title = document.querySelector(".titulo");
    let tempInfo = document.querySelector(".tempInfo");
    let imgTemp = document.querySelector(".temp img");
    let ventoInfo = document.querySelector(".ventoInfo");
    let ventoPonto = document.querySelector(".ventoPonto");

    Result.style.display = "block";
    showWarning("");
    Title.innerHTML = `${nameCity},${country}`;
    tempInfo.innerHTML = `${temp} <sup>ºC</sup>`;
    ventoInfo.innerHTML = `${wind} <span>km/h</span>`;
    imgTemp.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    ventoPonto.style.transform = `rotate(${angle}deg)`;
}
