const display = document.getElementById("display");

function add(value) {
  display.value += value;
}

function calculate() {
  display.value = eval(display.value);
}

function clearDisplay() {
  display.value = "";
}