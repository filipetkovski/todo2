
let button = document.getElementById("butCas1");
button.addEventListener("click", doneDay);
function doneDay() {
    button.style.backgroundColor = "green";
}

function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    if(hrs === 0) {
        document.getElementById('hours').innerHTML = "0" + hrs;
    } else {
        document.getElementById('hours').innerHTML = hrs;
    }

    if(min < 10) {
        document.getElementById('minutes').innerHTML = "0" + min;
    } else {
        document.getElementById('minutes').innerHTML = min;
    }
}
setInterval(displayTime, 10);

function menuOpen() {
    const nav1= document.getElementById("nav");
    const ham1 = document.getElementById("ham1");
    const ham2 = document.getElementById("ham2");
    let navButton1 = document.getElementById("span1");
    let navButton2 = document.getElementById("span2");
    let navButton3 = document.getElementById("span3");
    let navButton4 = document.getElementById("span4");
    let navButton5 = document.getElementById("span5");

    nav1.style.width = "250px";
    nav1.style.transition = "0s";
    nav1.style.boxShadow = "0 5px 10px black";

    ham1.style.display = "none";
    ham2.style.display = "flex";
    ham2.style.justifyContent = "center";
    ham2.style.alignItems = "center";

    navButton1.style.fontSize = "1em";
    navButton2.style.fontSize = "1em";
    navButton3.style.fontSize = "1em";
    navButton4.style.fontSize = "1em";
    navButton5.style.fontSize = "1em";

}

function menuClose() {
    let nav1= document.getElementById("nav");
    let ham1 = document.getElementById("ham1");
    let ham2 = document.getElementById("ham2");
    let navButton1 = document.getElementById("span1");
    let navButton2 = document.getElementById("span2");
    let navButton3 = document.getElementById("span3");
    let navButton4 = document.getElementById("span4");
    let navButton5 = document.getElementById("span5");

    nav1.style.width = "60px";
    nav1.style.transition = "0.5s";
    nav1.style.boxShadow = "none";

    ham1.style.display = "flex";
    ham2.style.display = "none";

    navButton1.style.fontSize = "0";
    navButton2.style.fontSize = "0";
    navButton3.style.fontSize = "0";
    navButton4.style.fontSize = "0";
    navButton5.style.fontSize = "0";

}