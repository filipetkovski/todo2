
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

window.addEventListener("load", () => {
    const dark = document.getElementById("darkTheme");
    const nav= document.getElementById("nav");

    dark.addEventListener("mouseenter", () => {
        menuClose();
    });

    dark.addEventListener("click", () => {
        menuClose();
    });

    nav.addEventListener("mouseenter", () => {
        let wid = outerWidth;
        if(wid === 450) {
            menuOpen();
        }
    });
});

function menuOpen() {
    const nav1= document.getElementById("nav");
    const ham1 = document.getElementById("ham1");
    const ham2 = document.getElementById("ham2");

    const dark = document.getElementById("darkTheme");
    dark.style.bottom = "0";
    dark.style.opacity = "1";

    nav1.style.height = "100vh"
    nav1.style.boxShadow = "0 5px 10px black";
    nav1.style.opacity = "1";

    ham1.style.display = "none";
    ham2.style.display = "flex";
    ham2.style.justifyContent = "center";
    ham2.style.alignItems = "center";

}

function menuClose() {
    let nav1= document.getElementById("nav");
    let ham1 = document.getElementById("ham1");
    let ham2 = document.getElementById("ham2");

    const dark = document.getElementById("darkTheme");
    dark.style.bottom = "unset";
    dark.style.opacity = "0";

    nav1.style.height = "0"
    nav1.style.boxShadow = "none";
    nav1.style.opacity = "0";

    ham1.style.display = "flex";
    ham2.style.display = "none";

}