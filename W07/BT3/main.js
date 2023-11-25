function calculator() {
    var display = document.getElementById("display");

    function appendValue(value) {
        display.value += value;
    }
    function clearDisplay(){
        display.value = '';
    }
    function deleteLastChar(){
        display.value = display.value.toString().slice(0, -1);
    }
    function evaluateExpression() {
        display.value = eval(display.value);
    }    
    function toggleSign() {
        if (display.value.charAt(0) === '-') {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }

    

    document.getElementById("calculator").addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            var buttonValue = e.target.value;
            switch (buttonValue) {
                case 'AC':
                    clearDisplay();
                    break;
                case 'DE':
                    deleteLastChar()
                    break;
                case "=":
                    evaluateExpression();
                    break;
                case "+/-":
                    toggleSign();
                    break;
                default:
                    appendValue(buttonValue);
                    break;
            }
        }
    });
}

calculator();