const inputStrings = document.getElementsByClassName("input-string");
const buttons = document.getElementsByClassName("button");
let operand1 = 0;
let operator = null;
let inputText = "0"; // Assign inputStrings[0].textContent to a variable

inputStrings[0].textContent = inputText;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const checkButton = buttons[i].textContent.replace(/\s+/g, '');
    switch (checkButton) {
      case "=":
        {
          const operand2 = parseFloat(inputText);

          switch (operator) {
            case "+":
              inputText = operand1 + operand2;
              break;
            case "-":
              inputText = operand1 - operand2;
              break;
            case "\u00D7":
              inputText = operand1 * operand2;
              break;
            case "/":
              inputText = reduceOutput((operand1 / operand2).toString());
              break;
            case "%":
              inputText = operand1 % operand2;
              break;
            default:
              break;
          }
        }
        break;
      case "+":
      case "-":
      case "/":
      case "\u00D7":
      case "%":
        operand1 = parseFloat(inputText);
        operator = buttons[i].textContent;
        break;
      case "Del":
        if (inputText.length === 1) {
          inputText = "0";
        } else {
          inputText = reduceOutput(inputText, inputText.length - 1);
        }
        break;
      case "CE":
        inputText = "0";
        break;
      case "C":
        inputText = "0";
        operand1 = 0;
        operator = null;
        break;
      case "√x":
        inputText = Math.sqrt(parseFloat(inputText)).toString().slice(0, 12);
        break;
      case "Sqr":
        inputText = reduceOutput(Math.pow(parseFloat(inputText) ,2).toString());
        break;
      case "Inv":
        inputText = (1 / parseFloat(inputText)).toString().slice(0, 12);
        break;
      default:
        if (inputText == "0" || inputText == operand1.toString()) {
          inputText = buttons[i].textContent;
        } else {
          inputText += buttons[i].textContent;
        }
        break;
    }

    inputStrings[0].textContent = inputText;
  });
}

function reduceOutput(str, len = 12) {
  return str.slice(0, len);
}
