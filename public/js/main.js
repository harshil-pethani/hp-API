const day = document.getElementById('day');
const today_date = document.getElementById('today_date');
const cityname = document.getElementById("cityname");
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const datahide = document.querySelector('.middle_layer');

const todaydata = () => {
    var cdate = new Date();
    var daynumber = cdate.getDay();
    if (daynumber === 0) {
        today = 'Sunday';
    } else if (daynumber === 1) {
        today = 'Monday';
    } else if (daynumber === 2) {
        today = 'Tuesday';
    } else if (daynumber === 3) {
        today = 'Wednesday';
    } else if (daynumber === 4) {
        today = 'Thursday';
    } else if (daynumber === 5) {
        today = 'Friday';
    } else if (daynumber === 6) {
        today = 'Saturday';
    }


    console.log(today);
    var date = cdate.getDate();


    var month = cdate.getMonth();
    if (month === 0) {
        cmonth = 'Jan';
    } else if (month === 1) {
        cmonth = 'Feb';
    } else if (month === 2) {
        cmonth = 'March';
    } else if (month === 3) {
        cmonth = 'April';
    } else if (month === 4) {
        cmonth = 'May';
    } else if (month === 5) {
        cmonth = 'June';
    } else if (month === 6) {
        cmonth = 'July';
    } else if (month === 7) {
        cmonth = 'Aug';
    } else if (month === 8) {
        cmonth = 'Sep';
    } else if (month === 9) {
        cmonth = 'Oct';
    } else if (month === 10) {
        cmonth = 'Nov';
    } else if (month === 11) {
        cmonth = 'Dec';
    }
    
    day.innerText = `${today}`;
    today_date.innerText = `${date} ${cmonth}`;
}




const getinfo = async (event) => {
    event.preventDefault();
    let cityval = cityname.value;
    if (cityval === "") {
        city_name.innerText = `Please Enter The City Name`;
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=a7757a3004b8d9c5bde9a291720254d5`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrdata = [data];
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp.innerText = `${(arrdata[0].main.temp - 273).toFixed(2)} ℃`;
            // temp_status.innerText = arrdata[0].weather[0].main;

            const tempmood = arrdata[0].weather[0].main;

            if (tempmood == "clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }
            else if (tempmood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #dfe4ea;'></i>"
            }
            else if (tempmood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #eccc68;'></i>"
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #dfe4ea;'></i>"
            }
            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = `Please Enter The City Name Properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitbtn.addEventListener('click', getinfo);