function nickname() {
    const inputNick = document.getElementById("nickname1");

    if(inputNick.value !== '') {
        const text = inputNick.value;
        pasteNickname(text);
    } else {
        inputNick.style.borderBottom = "2px solid red";
    }
}

function pasteNickname(text) {
    const none = document.getElementById("none");
    const pasteNick = document.getElementById("nickname");
    none.style.display = "none";
    pasteNick.innerHTML = "";
    pasteNick.innerHTML = text;
}