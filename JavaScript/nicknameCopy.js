const inputNick = document.getElementById("nickname1");
const none = document.getElementById("none");
const pasteNick = document.getElementById("nickname");

const text = inputNick.value;

//Get nickname
function nickname() {
    if(inputNick.value !== '') {
        pasteNickname(text);
    } else {
        inputNick.style.borderBottom = "2px solid red";
    }
}

//Paste nickname
function pasteNickname(text) {
    none.style.display = "none";
    pasteNick.innerHTML = "";
    pasteNick.innerHTML = text;
}