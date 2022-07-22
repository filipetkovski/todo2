window.addEventListener('load', () => {
    const del1 = document.querySelector(".taskBody__delete-button");
    cont list = doucment.querySelector(".taskBody")
    del1.addEventListener('click', () => {
        list.removeChild(del1);
    });
});
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
    } else if (n === 2) {
        if(addInput2.value !== '') {
            const text = addInput2.value;
            addTasktoPlanned(text);
        } else {
            addInput2.style.borderBottom = "1px solid white";
        }
    } else if (n === 3) {
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
    let divRight = document.createElement("div");
    let buttonDelete = document.createElement("button");
    let button = document.createElement("button");
    const div = document.getElementById("addTasks");

    if(min < 10 && hours === 0) {
        newTime.innerText = "0" + hours + ":" + "0"+ min + " - " + year;
    } else if(min < 10) {
        newTime.innerText = hours + ":" + "0"+ min + " - " + year;
    } else if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min + " - " +  year;
    } else {
        newTime.innerText = hours + ":" + min + " - " +  year;
    }

    divRight.classList.add("taskBody__right-side");
    buttonDelete.classList.add("taskBody__delete-button");
    newTime.classList.add("taskBody__date");
    newDiv.classList.add("taskBody");
    newTask.classList.add("taskBody__text");
    divLeft.classList.add("taskBody__left-side");
    button.classList.add("taskBody__button");
    newTask.innerText = text;
    buttonDelete.innerText = "Delete";

    divRight.appendChild(newTime);
    divRight.appendChild(buttonDelete);
    divLeft.appendChild(button);
    divLeft.appendChild(newTask);
    newDiv.appendChild(divLeft);
    newDiv.appendChild(divRight);
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
    let divRight = document.createElement("div");
    let buttonDelete = document.createElement("button");
    let divLeft = document.createElement("div");
    let button = document.createElement("button");
    const div = document.getElementById("addTasks1");
    if((min < 10) && (hours === 0)) {
        newTime.innerText = "0" + hours + ":" + "0"+ min + " - " + year;
    } else if(min < 10) {
        newTime.innerText = hours + ":" + "0"+ min + " - " + year;
    } else if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min + " - " +  year;
    } else {
        newTime.innerText = hours + ":" + min + " - " +  year;
    }

    divRight.classList.add("taskBody__right-side");
    buttonEdit.classList.add("taskBody__edit-button");
    buttonDelete.classList.add("taskBody__delete-button");
    newTime.classList.add("taskBody__date");
    newDiv.classList.add("taskBody");
    newTask.classList.add("taskBody__text");
    divLeft.classList.add("taskBody__left-side");
    button.classList.add("taskBody__button");
    newTask.innerText = text;
    buttonDelete.innerText = "Delete";

    divRight.appendChild(newTime);
    divRight.appendChild(buttonDelete);
    divLeft.appendChild(button);
    divLeft.appendChild(newTask);
    newDiv.appendChild(divLeft);
    newDiv.appendChild(divRight);
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
    let divRight = document.createElement("div");
    let buttonDelete = document.createElement("button");
    let divLeft = document.createElement("div");
    let button = document.createElement("button");
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

    divRight.classList.add("taskBody__right-side");
    buttonDelete.classList.add("taskBody__delete-button");
    newTime.classList.add("taskBody__date");
    newDiv.classList.add("taskBody");
    newTask.classList.add("taskBody__text");
    divLeft.classList.add("taskBody__left-side");
    button.classList.add("taskBody__button");
    newTask.innerText = text;
    buttonDelete.innerText = "Delete";

    divRight.appendChild(newTime);
    divRight.appendChild(buttonDelete);
    divLeft.appendChild(button);
    divLeft.appendChild(newTask);
    newDiv.appendChild(divLeft);
    newDiv.appendChild(divRight);
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
    let divRight = document.createElement("div");
    let buttonDelete = document.createElement("button");
    let divLeft = document.createElement("div");
    let button = document.createElement("button");
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

    divRight.classList.add("taskBody__right-side");
    buttonDelete.classList.add("taskBody__delete-button");
    newTime.classList.add("taskBody__date");
    newDiv.classList.add("taskBody");
    newTask.classList.add("taskBody__text");
    divLeft.classList.add("taskBody__left-side");
    button.classList.add("taskBody__button");
    newTask.innerText = text;
    buttonDelete.innerText = "Delete";

    divRight.appendChild(newTime);
    divRight.appendChild(buttonDelete);
    divLeft.appendChild(button);
    divLeft.appendChild(newTask);
    newDiv.appendChild(divLeft);
    newDiv.appendChild(divRight);
    div.appendChild(newDiv);

    addTasktoTaks(text);
}
