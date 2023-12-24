let currentInput = '';
let display = document.getElementById('display');

function appendToDisplay(value) {
  // Ensure that consecutive operators are not allowed
  if (isOperator(value) && isOperator(getLastChar())) {
    return;
  }

  // Allow the first input to be an operator if it is a minus sign (for negative numbers)
  if (currentInput === '' && value === '-') {
    currentInput += value;
  } else if (isOperator(value) && currentInput === '') {
    // Do nothing if an operator is the first input
    return;
  } else {
    currentInput += value;
  }

  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = 'Error';
  }
}

function getLastChar() {
  // Get the last character of the current input
  return currentInput.charAt(currentInput.length - 1);
}

function isOperator(value) {
  // Check if the value is one of the operators
  return ['+', '-', '*', '/'].includes(value);
}
