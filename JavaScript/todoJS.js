
function navButton(n) {
    const sec = [];
    const nav = [];

    sec[0] = document.getElementById("main1");
    sec[1] = document.getElementById("main2");
    sec[2] = document.getElementById("main3");
    sec[3] = document.getElementById("main4");

    nav[0] = document.getElementById("nav1");
    nav[1] = document.getElementById("nav2");
    nav[2] = document.getElementById("nav3");
    nav[3] = document.getElementById("nav4");

    sec[n].style.display = "unset";
    nav[n].style.border = "1px solid firebrick";

    for(let i=0;i<4;i++) {
        if(i !== n) {
            sec[i].style.display = "none";
            nav[i].style.border = "none";
        }
    }

    menuClose();
}
