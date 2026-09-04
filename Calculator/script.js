let current = "";
let previous = "";
let operator = "";

function calculate(value) {

    // Numbers
    if (value >= "0" && value <= "9") {
        current += value;
        console.log("Current:", current);
    }

    // Decimal
    else if (value === ".") {
        if (!current.includes(".")) {
            current += ".";
        }

        console.log("Current:", current);
    }

    // AC
    else if (value === "AC") {
        current = "";
        previous = "";
        operator = "";

        console.log("Calculator Cleared");
    }

    // DEL
    else if (value === "DEL") {
        current = current.slice(0, -1);

        console.log("Current:", current || "0");
    }

    // Operators
    else if (
        value === "+" ||
        value === "−" ||
        value === "×" ||
        value === "÷"
    ) {
        if (current === "") return;

        previous = current;
        current = "";
        operator = value;

        console.log("Calculation:", previous, operator);
    }

    // Equal
    else if (value === "=") {
        if (previous === "" || current === "" || operator === "") {
            return;
        }

        let num1 = Number(previous);
        let num2 = Number(current);
        let result;

        if (operator === "+") {
            result = num1 + num2;
        }

        else if (operator === "−") {
            result = num1 - num2;
        }

        else if (operator === "×") {
            result = num1 * num2;
        }

        else if (operator === "÷") {
            if (num2 === 0) {
                console.log("Error: Cannot divide by zero");
                return;
            }

            result = num1 / num2;
        }

        console.log(
            previous + " " + operator + " " + current + " = " + result
        );

        current = result.toString();
        previous = "";
        operator = "";
    }

    // Percentage
    else if (value === "%") {
        if (current !== "") {
            current = (Number(current) / 100).toString();

            console.log("Percentage:", current);
        }
    }
}