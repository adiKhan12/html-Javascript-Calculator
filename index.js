calculator = document.querySelector(".calculator");
calcScreen = calculator.querySelector(".cal-screen");
calcBtns = calculator.querySelectorAll(".cal-button")

var num1 = 1;
var num2 = 1;
var i;
var result;


calcBtns[0].addEventListener("click", function() {
    for (let i = 0; i < 10; i++) {
        if(event.target.innerText == i){
            if(calcScreen.innerText == "0")
            {
                calcScreen.innerText = event.target.innerText;
            }
            else
            {
                calcScreen.innerText += event.target.innerText; 
            }
        }
        
    }
    if (event.target.innerText == "/") {
        num1 = parseInt(calcScreen.innerText);
        i = "/";
        calcScreen.innerText = 0;
    }
    if (event.target.innerText == "+") {
        num1 = parseInt(calcScreen.innerText);
        i = "+";
        calcScreen.innerText = 0;
    }
    if (event.target.innerText == "-") {
        num1 = parseInt(calcScreen.innerText);
        i = "-";
        calcScreen.innerText = 0;
    }
    if (event.target.innerText == "*") {
        num1 = parseInt(calcScreen.innerText);
        i = "*";
        calcScreen.innerText = 0;
    }
    if (event.target.innerText == "C") {
        num1 = 0;
        num2 = 0;
        result = 0;
        i = "0";
        calcScreen.innerText = 0;
    }
    
    if (event.target.innerText == "=") {
        num2 = parseInt(calcScreen.innerText)
        if (i == "/") {
            result = num1 / num2;
            calcScreen.innerText = result;
        }

        if (i == "+") {
            result = num1 + num2;
            calcScreen.innerText = result;
        }

        if (i == "-") {
            result = num1 - num2;
            calcScreen.innerText = result;
        }

        if (i == "*") {
            result = num1 * num2;
            calcScreen.innerText = result;
        }
    }
});