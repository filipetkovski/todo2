
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
    let navButton = [];

    navButton[0] = document.getElementById("nav1");
    navButton[1] = document.getElementById("nav2");
    navButton[2] = document.getElementById("nav3");
    navButton[3] = document.getElementById("nav4");
    navButton[4] = document.getElementById("nav5");

    const dark = document.getElementById("darkTheme");
    dark.style.left = "250px";
    dark.style.right = "0";
    dark.style.opacity = "1";

    nav1.style.width = "250px";
    nav1.style.boxShadow = "0 5px 10px black";

    ham1.style.display = "none";
    ham2.style.display = "flex";
    ham2.style.justifyContent = "center";
    ham2.style.alignItems = "center";

    for(let i=0;i<5;i++) {
        navButton[i].style.fontSize = "1em";
        navButton[i].style.opacity = "1";
    }
}

function menuClose() {
    let nav1= document.getElementById("nav");
    let ham1 = document.getElementById("ham1");
    let ham2 = document.getElementById("ham2");
    let navButton = [];

    navButton[0] = document.getElementById("nav1");
    navButton[1] = document.getElementById("nav2");
    navButton[2] = document.getElementById("nav3");
    navButton[3] = document.getElementById("nav4");
    navButton[4] = document.getElementById("nav5");

    const dark = document.getElementById("darkTheme");
    dark.style.left = "0";
    dark.style.right = "unset";
    dark.style.opacity = "0";

    nav1.style.width = "0";
    nav1.style.boxShadow = "none";

    ham1.style.display = "flex";
    ham2.style.display = "none";

    for(let i=0;i<5;i++) {
        navButton[i].style.fontSize = "0";
        navButton[i].style.opacity = "0";
    }

}