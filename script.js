function calculate(operator) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers only.";

        // Make the boxes red if the input is bad
        if (isNaN(num1)) {
            document.getElementById("num1").classList.add("error");
        } else {
            document.getElementById("num1").classList.remove("error");
        }
        if (isNaN(num2)) {
            document.getElementById("num2").classList.add("error");
        } else {
            document.getElementById("num2").classList.remove("error");
        }
    } else {
        // If everything is ok, remove the red boxes
        document.getElementById("num1").classList.remove("error");
        document.getElementById("num2").classList.remove("error");

        // Do the math like normal
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : "Division by zero is not permitted.";
                break;
            default:
                result = "This operation is unknown to me.";
        }
    }

    document.getElementById("result").textContent = result;
    
    const resultBox = document.getElementById("result");
    resultBox.classList.remove("flash"); // Remove old animation

    //Wait a tiny moment before re-adding the class to restart the animation
    setTimeout(() => {
        resultBox.classList.add("flash"); // Add new animation
    }, 10);
}

function resetCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "?";
}