document.body.onkeydown = function (e) {
    validKeyPressed(e.code.replace("Key", "").toLowerCase(), false);
}

document.body.onkeyup = function (e) {
    validKeyPressed(false, e.code.replace("Key", "").toLowerCase());
    console.log(e.code)
}

const keyboard = document.querySelectorAll(".on-btn");
const validKeyPressed = (keyDown, keyUp) => {
    for (let i = 0; i < keyboard.length; i++) {
        if (keyboard[i].id === keyDown && keyDown === "enter") {
            keyboard[i].children[0].style.transform = "translateY(4px)";
            keyboard[i + 1].children[0].style.transform = "translateY(4px)";
        }
        else if (keyboard[i].id === keyUp && keyUp === "enter") {
            keyboard[i].children[0].style.transform = "translateY(0)";
            keyboard[i + 1].children[0].style.transform = "translateY(0)";
        }

        if (keyboard[i].id === keyDown) {
            keyboard[i].children[0].style.transform = "translateY(4px)";
        }
        else if (keyboard[i].id === keyUp) {
            keyboard[i].children[0].style.transform = "";
        }
    }
}