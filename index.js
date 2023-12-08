
// 페이드 로드시 위치정보 가져오기 
document.addEventListener('DOMContentLoaded', function() {
    getLocation();
})


function getLocation() {
    // 브라우저가 geolocation api를 지원하는지 확인한다.
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById('location').innerHTML = "위치정보를 가져오지 못했습니다.";
    }
} 

function showPosition(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
    .then(response => response.json())
    .then(data => {
      const location = data.display_name;
      const city = `${location}`.split(',')[5];
      weatherByLocation(latitude, longitude);
    })
    .catch(error => {
      console.error('위치 정보 가져오기 실패:', error);
      document.getElementById("location").innerHTML = "위치 정보를 가져오는 데 문제가 발생했습니다.";
    });

}

function weatherByLocation(latitude, longitude) {
    const API_KEY = '1c7f38a00a15ce3d0c88254765240a94';

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    )
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            const description = json.weather[0].description;
            document.getElementById('description').innerHTML=description;
        })
}



function bgRain() {

}

function bgSnow() {
    
}

function bgSun() {

}

function bgCloud() {

}