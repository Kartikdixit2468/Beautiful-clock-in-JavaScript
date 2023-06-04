function clock(){

    // Getting elements from dom
    let h = document.getElementById('hours');
    let m = document.getElementById('minutes');
    let s = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    let identifier_time = 'AM'

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    

    if(hours > 12){
        hours = hours - 12
        identifier_time = 'PM'
    }

    if(hours < 10){
        hours = `0${hours}`
    }
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    if(seconds < 10){
        seconds = `0${seconds}`
    }
    
    h.innerHTML = hours
    m.innerHTML = minutes
    s.innerHTML = seconds
    ampm.innerHTML = identifier_time
};
var interval = setInterval(clock, 1000);
