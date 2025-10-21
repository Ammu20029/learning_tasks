const display = document.getElementById('display');

    function append(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = '';
    }

    function calculate() {
      try {
        display.value = eval(display.value);// evaluates string as code and the expression & display the result
      } catch {
        display.value = 'Error';
      }
    }