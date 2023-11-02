// Convert string to arithmetic operation
// For example accept a string like "10 + 20"
// and return output as 30
// b. "20 - 10" //Output 10
// Only string input is allowed which you have to parse and get a number output
// eval is not allowed




function convertStringToArithmeticOperation(expression) {

    if (typeof expression !== "string") {
        return "Invalid Type";
    }
     if (isNaN(expression) === Number) {
        return "Invalid input: not a number or arithmetic expression";
    }
   
    const splitInput = expression.split(" ");

    let result = parseFloat(splitInput[0]);

    for (let i = 1; i < splitInput.length; i += 2) {
        const operator = splitInput[i];
        const number2 = parseFloat(splitInput[i + 1]);

        switch (operator) {
            case "+":
                result += number2;
                break;
            case "-":
                result -= number2;
                break;
            case "*":
                result *= number2;
                break;
            case "/":
                result /= number2;
                break;
            default:
                return "Invalid operator: " + operator;
        }
    }

    return result;
}

  console.log(convertStringToArithmeticOperation("10 + 70 + 30")); 
  console.log(convertStringToArithmeticOperation("20 - 10")); 
  console.log(convertStringToArithmeticOperation(20 - 10));
  console.log(convertStringToArithmeticOperation(true));
  console.log(convertStringToArithmeticOperation("10 - 30 + 50"));


  