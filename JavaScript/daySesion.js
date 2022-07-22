window.addEventListener('load', () => {
    let form = document.querySelector("#form");
    let div = document.getElementById("addTasks");

    form.addEventListener('submit', (e) => {
        const addInput = document.getElementById("addInput");
        if(addInput.value !== '') {
            let text = addInput.value;
            e.preventDefault();
            let dateTime = new Date();
            let min = dateTime.getMinutes();
            let hours = dateTime.getHours();
            let newTask = document.createElement("div");
            let newTime = document.createElement("div");
            let divLeft = document.createElement("div");
            let divRight = document.createElement("div");
            let button = document.createElement("button");
            let newDiv = document.createElement("div");
            let buttonDelete = document.createElement("button");
            if(min < 10 && hours === 0) {
                newTime.innerText = "0" + hours + ":" + "0"+ min;
            } else if(min < 10) {
                newTime.innerText = hours + ":" + "0"+ min;
            } else if(hours === 0) {
                newTime.innerText = "0" + hours + ":" + min;
            } else {
                newTime.innerText = hours + ":" + min;
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

            buttonDelete.addEventListener('click', (e) => {
                div.removeChild(newDiv);
            });

            button.addEventListener("click", (e) => {
                div.removeChild(newDiv);
                finished(text);
            });
        } else {
            alert("Enter your task name!");
        }
    });
});

let br = 0;

function finished(text) {
    br++;
    const completed = document.getElementById("completed");
    completed.style.display = "unset";
    let div = document.getElementById("doneTask");
    let dateTime = new Date();
    let min = dateTime.getMinutes();
    let hours = dateTime.getHours();
    let newTask = document.createElement("div");
    let newTime = document.createElement("div");
    let divLeft = document.createElement("div");
    let divRight = document.createElement("div");
    let button = document.createElement("button");
    let newDiv = document.createElement("div");
    let buttonDelete = document.createElement("button");
    if((min < 10) && (hours === 0)) {
        newTime.innerText = "0" + hours + ":" + "0"+ min;
    } else if(min < 10) {
        newTime.innerText = hours + ":" + "0"+ min;
    } else if(hours === 0) {
        newTime.innerText = "0" + hours + ":" + min;
    } else {
        newTime.innerText = hours + ":" + min;
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
    newDiv.style.backgroundColor = "green";

    button.addEventListener("click", () => {
        div.removeChild(newDiv);
        back(text);
    });

    buttonDelete.addEventListener("click", () => {
        br--;
        const completed = document.getElementById("completed");
        if(br === 0 ) {
            completed.style.display = "none";
        }
        deleteDone(newDiv);
    });

    divRight.appendChild(newTime);
    divRight.appendChild(buttonDelete);
    divLeft.appendChild(button);
    divLeft.appendChild(newTask);
    newDiv.appendChild(divLeft);
    newDiv.appendChild(divRight);
    div.appendChild(newDiv);
}

function mistake(done) {
    let div = document.getElementById("doneTask");
    div.removeChild(done);
}

function deleteDone(done) {
    let div = document.getElementById("doneTask");
    div.removeChild(done);
}

function back(text) {
    br--;
    const completed = document.getElementById("completed");
    if(br === 0 ) {
        completed.style.display = "none";
    }
    let div = document.getElementById("addTasks");
    if(text !== '') {
        let dateTime = new Date();
        let min = dateTime.getMinutes();
        let hours = dateTime.getHours();
        let newTask = document.createElement("div");
        let newTime = document.createElement("div");
        let divLeft = document.createElement("div");
        let divRight = document.createElement("div");
        let button = document.createElement("button");
        let newDiv = document.createElement("div");
        let buttonDelete = document.createElement("button");
        if(min < 10 && hours === 0) {
            newTime.innerText = "0" + hours + ":" + "0"+ min;
        } else if(min < 10) {
            newTime.innerText = hours + ":" + "0"+ min;
        } else if(hours === 0) {
            newTime.innerText = "0" + hours + ":" + min;
        } else {
            newTime.innerText = hours + ":" + min;
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

        buttonDelete.addEventListener('click', () => {
            div.removeChild(newDiv);
        });

        button.addEventListener("click", () => {
            div.removeChild(newDiv);
            finished(text);
        });
    } else {
        alert("Enter your task name!");
    }
}
