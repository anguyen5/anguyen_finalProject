"use strict"

var more = false;
//function use Enter key
window.onload = init;

function init() {
    useEnterKeyboard();
    displayTime();
    setupStyle();
    callLoginButton();
    modifyDOM();
    //3.
    //create event for h2 Touchme
    var clickMeDIV = document.getElementById("clickMe");
    var clickMeH2 = document.createElement("h2");
    var textMore = document.getElementById("textMore");
    var clickMeText = document.createTextNode("Touch me!");

    clickMeH2.addEventListener("click", function (e) {
        var addr = document.getElementById("addr");
        addr.classList.add("displayAddr");

    });

    clickMeH2.addEventListener("dblclick", function (e) {
        var addr = document.getElementById("addr");
        addr.classList.remove("displayAddr");
    });

    clickMeH2.appendChild(clickMeText);
    clickMeDIV.appendChild(clickMeH2);
    var styleMore = document.createElement("style");
    styleMore.textContent =
        '#textMore {\
        background-color: rgba(68,94,186,0.6); \
        color: blue; \
        font-family: "Roboto Mono", monospace;}';
    document.head.append(styleMore);
    textMore.addEventListener("click", function (e) {
        more = !more;
        if (more == true) {
            textMore.innerText = "less...";
            modifyDOM();
        }
        else {
            textMore.innerText = "more...";
            resetDOM();
        }
    });

}

function useEnterKeyboard() {
    var inputUsers = document.getElementsByClassName("inputUser");
    for (var i = 0; i < 4; i++) {
        const index = i;
        if (i < 3) {
            inputUsers[i].addEventListener("keyup",  (e) =>{
                if (e.keyCode === 13) {
                    inputUsers[index + 1].focus();
                    e.preventDefault();
                }
            });
        }
        else {
            inputUsers[i].addEventListener("keyup", function (e) {
                if (e.keyCode === 13) {
                    document.getElementById("login_button").click();
                    e.preventDefault();
                }
            });
        }
    }
}

function callLoginButton() {

    var loginButton = document.getElementById("login_button");

    loginButton.addEventListener("click", function (e) {
        if (clientAcc() == 4) {
            window.location.href = "boba_menu.html";
        }
        else {
            alert("Please, fill out the form!")
        }
    });
}

function clientAcc() {

    var fName = document.getElementById("fname");
    var lName = document.getElementById("lname");
    var phoneNum = document.getElementById("phoneNum");
    var email = document.getElementById("email");
    var fieldIndex = 0;

    if (fName.value == "") {
        fName.setCustomValidity("Please, Enter your first name");
    }
    else {
        fieldIndex++;
    }

    if (lName.value == "") {
        lName.setCustomValidity("Please, Enter your last name");
    }
    else {
        fieldIndex++;
    }

    if (phoneNum.value == "") {
        phoneNum.setCustomValidity("Please, Enter your phone number");
    }
    else {
        fieldIndex++;
    }

    if (email.value == "") {
        email.setCustomValidity("Please, Enter your email");
    }
    else {
        fieldIndex++;
    }
    return fieldIndex;
}

// display time
function displayTime() {
    var thisDate = new Date();
    document.getElementById("currentTime").innerHTML = thisDate.toLocaleString();
    setTimeout(displayTime, 1000);
}

//set up page view for boba_index.html
//setup style

function setupStyle() {
    var pageStyle = document.createElement("link");
    pageStyle.setAttribute("rel", "stylesheet");
    pageStyle.setAttribute("href", "css/ss_insert.css");
    document.head.append(pageStyle);
}

//11, 3, 12
function modifyDOM() {

    var text = document.getElementById("text");
    var textStr = "As pioneers in the Boba Tea industry,\
     we have a track record of 26 years in research and development, \
    just to bring you the best quality tea at the best price. Find the drink that will make your day today.";
    text.textContent = textStr;

}

function resetDOM() {
    var text = document.getElementById("text");
    var textStr = "Brown sugar milk is the latest beverage trend to hit the bubble tea market and it has won hearts and palates from Singapore to Shanghai for its central ingredient — \
     brown sugar caramel. While bubble tea used to be made traditionally with simple syrup from white sugar, brown sugar, \
      when caramelised into a syrup, has toasty, nutty nuances that make the drink so delicious. \
       If you can't get enough of this trendy drink, here's some good news for you.";
    text.textContent = textStr;
}




