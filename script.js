function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
  const display = document.getElementById('display');
  display.value += number;
}

function appendOperator(operator) {
  const display = document.getElementById('display');
  display.value += operator;
}

function appendTrigFunction(func) {
  const display = document.getElementById('display');
  display.value += func + '(';
}

function calculateSquareRoot() {
  const display = document.getElementById('display');
  display.value = Math.sqrt(eval(display.value));
}

function appendLogFunction() {
  const display = document.getElementById('display');
  display.value += 'log(';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    let expression = display.value;
    expression = expression.replace(/\^/g, '**');
    expression = expression.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');
    expression = expression.replace(/sin\(([^)]+)\)/g, 'Math.sin($1 * Math.PI / 180)');
    expression = expression.replace(/cos\(([^)]+)\)/g, 'Math.cos($1 * Math.PI / 180)');
    expression = expression.replace(/tan\(([^)]+)\)/g, 'Math.tan($1 * Math.PI / 180)');
    display.value = eval(expression);
  } catch (e) {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key)) {
    appendNumber(key);
  } else if (key === '+') {
    appendOperator('+');
  } else if (key === '-') {
    appendOperator('-');
  } else if (key === '*') {
    appendOperator('*');
  } else if (key === '/') {
    appendOperator('/');
  } else if (key === '^') {
    appendOperator('^');
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === '.') {
    appendNumber('.');
  }
});
