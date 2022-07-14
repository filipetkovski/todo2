const sec1 = document.getElementById("main1");
const sec2 = document.getElementById("main2");
const sec3 = document.getElementById("main3");
const sec4 = document.getElementById("main4");

//Add Task
function add(n) {
    const addInput = document.getElementById("addInput");
    const addInput1 = document.getElementById("addInput1");
    const addInput2 = document.getElementById("addInput2");
    const addInput3 = document.getElementById("addInput3");

    if(n === 0) {
        if(addInput.value !== '') {
            const text = addInput.value;
            addTasktoDay(text);
        } else {
            addInput.style.borderBottom = "1px solid white";
        }
    } else if(n === 1) {
        if(addInput1.value !== '') {
            const text = addInput1.value;
            addTasktoImportant(text);
        } else {
            addInput1.style.borderBottom = "1px solid white";
        }
    } if (n === 2) {
        if(addInput2.value !== '') {
            const text = addInput2.value;
            addTasktoPlanned();
        } else {
            addInput2.style.borderBottom = "1px solid white";
        }
    } if (n === 3) {
        if(addInput3.value !== '') {
            const text = addInput3.value;
            addTasktoTaks(text);
        } else {
            addInput3.style.borderBottom = "1px solid white";
        }
    }
}
//Day
function addTasktoDay(text) {
    let dateTime = new Date();
    let min = dateTime.getMinutes();
    let hours = dateTime.getHours();
    let year = dateTime.getFullYear();
    let newDiv = document.createElement("div");
    let newTask = document.createElement("div");
    let newTime = document.createElement("div");
    let divLeft = document.createElement("div");
    const div = document.getElementById("addTasks");
    let button = document.createElement("button");

    if(min < 10 && hours === 0) {
        newTime.innerText = "0" + hours + ":" + "0"+ min + " - " + year;
    } else if(min < 10) {
        newTime.innerText = hours + ":" + "0"+ min + " - " + year;
    } else if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min + " - " +  year;
    } else {
        newTime.innerText = hours + ":" + min + " - " +  year;
    }

    newTime.style.color = "#5b5b5b";
    newTime.style.fontSize = "0.8em"
    newDiv.style.padding = "15px 20px";
    newDiv.style.backgroundColor = "#b7b7b7";
    newDiv.style.marginBottom = "5px";
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "row";
    newDiv.style.justifyContent = "space-between";
    newDiv.style.alignItems = "center";
    newDiv.style.borderRadius = "10px";
    newTask.innerText = text;
    newTask.style.fontSize = "1.1em"
    newTask.style.marginLeft = "10px";
    divLeft.style.display = "flex";
    divLeft.style.flexDirection = "row";
    button.style.border = "none";
    button.style.borderRadius = "10px";
    button.style.width = "20px";
    button.id = "butCas1";

    divLeft.appendChild(button);
    divLeft.appendChild(newTask);
    newDiv.appendChild(divLeft);
    newDiv.appendChild(newTime);
    div.appendChild(newDiv);

    addTasktoTaks(text);
}
//Important
function addTasktoImportant(text) {
    let dateTime = new Date();
    let min = dateTime.getMinutes();
    let hours = dateTime.getHours();
    let year = dateTime.getFullYear();
    let newDiv = document.createElement("div");
    let newTask = document.createElement("div");
    let newTime = document.createElement("div");
    const div = document.getElementById("addTasks1");
    if(min < 10 && hours === 0) {
        newTime.innerText = "0" + hours + ":" + "0"+ min + " - " + year;
    } else if(min < 10) {
        newTime.innerText = hours + ":" + "0"+ min + " - " + year;
    } else if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min + " - " +  year;
    } else {
        newTime.innerText = hours + ":" + min + " - " +  year;
    }

    newTime.style.color = "#5b5b5b";
    newTime.style.fontSize = "0.8em"
    newDiv.style.padding = "15px 20px";
    newDiv.style.backgroundColor = "#b7b7b7";
    newDiv.style.marginBottom = "5px";
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "row";
    newDiv.style.justifyContent = "space-between";
    newDiv.style.alignItems = "center";
    newDiv.style.borderRadius = "10px";
    newTask.innerText = text;
    newTask.style.fontSize = "1.1em"

    newDiv.appendChild(newTask);
    newDiv.appendChild(newTime);
    div.appendChild(newDiv);

    addTasktoTaks(text);
}
//Planned
function addTasktoPlanned(text) {
    let dateTime = new Date();
    let min = dateTime.getMinutes();
    let hours = dateTime.getHours();
    let year = dateTime.getFullYear();
    let newDiv = document.createElement("div");
    let newTask = document.createElement("div");
    let newTime = document.createElement("div");
    const div = document.getElementById("addTasks2");
    if(min < 10 && hours === 0) {
        newTime.innerText = "0" + hours + ":" + "0"+ min + " - " + year;
    } else if(min < 10) {
        newTime.innerText = hours + ":" + "0"+ min + " - " + year;
    } else if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min + " - " +  year;
    } else {
        newTime.innerText = hours + ":" + min + " - " +  year;
    }

    newTime.style.color = "#5b5b5b";
    newTime.style.fontSize = "0.8em"
    newDiv.style.padding = "15px 20px";
    newDiv.style.backgroundColor = "#b7b7b7";
    newDiv.style.marginBottom = "5px";
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "row";
    newDiv.style.justifyContent = "space-between";
    newDiv.style.alignItems = "center";
    newDiv.style.borderRadius = "10px";
    newTask.innerText = text;
    newTask.style.fontSize = "1.1em"

    newDiv.appendChild(newTask);
    newDiv.appendChild(newTime);
    div.appendChild(newDiv);

    addTasktoTaks(text);
}
//Tasks
function addTasktoTaks(text) {
    let dateTime = new Date();
    let min = dateTime.getMinutes();
    let hours = dateTime.getHours();
    let year = dateTime.getFullYear();
    let newDiv = document.createElement("div");
    let newTask = document.createElement("div");
    let newTime = document.createElement("div");
    const div = document.getElementById("addTasks3");
    if(min < 10 && hours === 0) {
        newTime.innerText = "0" + hours + ":" + "0"+ min + " - " + year;
    } else if(min < 10) {
        newTime.innerText = hours + ":" + "0"+ min + " - " + year;
    } else if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min + " - " +  year;
    } else {
        newTime.innerText = hours + ":" + min + " - " +  year;
    }

    newTime.style.color = "#5b5b5b";
    newTime.style.fontSize = "0.8em"
    newDiv.style.padding = "15px 20px";
    newDiv.style.backgroundColor = "#b7b7b7";
    newDiv.style.marginBottom = "5px";
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "row";
    newDiv.style.justifyContent = "space-between";
    newDiv.style.alignItems = "center";
    newDiv.style.borderRadius = "10px";
    newTask.innerText = text;
    newTask.style.fontSize = "1.1em"

    newDiv.appendChild(newTask);
    newDiv.appendChild(newTime);
    div.appendChild(newDiv);
}

function navButton1() {
    const sec1 = document.getElementById("main1");
    const sec2 = document.getElementById("main2");
    const sec3 = document.getElementById("main3");
    const sec4 = document.getElementById("main4");

    sec1.style.display = "unset";
    sec2.style.display = "none";
    sec3.style.display = "none";
    sec4.style.display = "none";
    menuClose();
}

function navButton2() {
    const sec1 = document.getElementById("main1");
    const sec2 = document.getElementById("main2");
    const sec3 = document.getElementById("main3");
    const sec4 = document.getElementById("main4");

    sec1.style.display = "none";
    sec2.style.display = "unset";
    sec3.style.display = "none";
    sec4.style.display = "none";
    menuClose();
}

function navButton3 () {
    const sec1 = document.getElementById("main1");
    const sec2 = document.getElementById("main2");
    const sec3 = document.getElementById("main3");
    const sec4 = document.getElementById("main4");

    sec1.style.display = "none";
    sec2.style.display = "none";
    sec3.style.display = "unset";
    sec4.style.display = "none";
    menuClose();
}

function navButton4 () {
    const sec1 = document.getElementById("main1");
    const sec2 = document.getElementById("main2");
    const sec3 = document.getElementById("main3");
    const sec4 = document.getElementById("main4");

    sec1.style.display = "none";
    sec2.style.display = "none";
    sec3.style.display = "none";
    sec4.style.display = "unset";
    menuClose();
}