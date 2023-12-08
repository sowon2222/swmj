
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

    weatherByLocation(latitude, longitude);
}

function weatherByLocation(lat, lon) {
    const API_KEY = '1c7f38a00a15ce3d0c88254765240a94';

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    ).then(response => response.json()).then(data => {
        document.getElementById('description').innerHTML=data.weather[0].main;
        if(data.weather[0].main=='Clouds'){
            bgCloud();
        }
    })
}



function bgRain() {

}

function bgSnow() {
    
}

function bgSun() {

}

function bgCloud() {
    document.getElementById('bg').style.backgroundColor='gray';
}