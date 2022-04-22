document.getElementById('citySearch').addEventListener("click", function () {
    const cityInput = document.getElementById("cityInput").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=20403c964658075b3d00052231a92e60`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const cityName = data.name;
            const temp = data.main.temp;
            const tempracher = temp - 273.15;
            const description = data.weather[0].description;
            const iconImages = data.weather[0].icon;

            document.getElementById("city-name").innerText = cityName;
            document.getElementById("tempacher").innerText = tempracher.toFixed(2);
            document.getElementById("des").innerText = description;
            document.getElementById("iconWhether").src = `https://openweathermap.org/img/wn/${iconImages}.png`;
        })
        .catch(error => alert('Please Enter a valid City Name'))
});