// Defining the time function which displays it in a 12 hour format with the correct AM/PM
let date = new Date();
function currentTime(){
    let amPm = 'AM';
    let hour = date.getHours();
    if(hour == 0){
        hour = 12;
    }
    if(hour >= 12){
        amPm = 'PM';
    }
    // if(hour < 10){
    //     hour = '0' + hour;
    // }
    if(hour > 12){
        hour = hour - 12;
    }
    let min = date.getMinutes();
    if(min < 10){
        min = '0' + min;
    }
    let sec = date.getSeconds();
    if(sec<10){
        sec = '0' + sec;
    }
    let month = date.getMonth();
    document.querySelector('.currentTime').innerHTML = hour + ":" + min + amPm;
}
// Defining the date function which displays it in the format of Month, Date , Year
function currentDate(){
    let months = ['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
    document.querySelector('.currentDate').innerHTML = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

function removeMsg(){
    document.querySelector('.msgDelete').remove();
}
// Refreshing the time and date to update it automatically with out a page reload
setInterval(currentTime, 1000);
setInterval(currentDate, 1000);
// Listening for a click which deletes the message at the bottom of the screen
document.querySelector('.msgDelete').addEventListener("click", removeMsg);