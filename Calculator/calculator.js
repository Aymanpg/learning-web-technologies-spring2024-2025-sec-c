let input = "";

function press(val) {
  input += val;
  document.getElementById("display").value = input;
}

function clearDisplay() {
  input = "";
  document.getElementById("display").value = "";
}

function backspace() {
  input = input.slice(0, -1);
  document.getElementById("display").value = input;
}

function calculate() {
  try {
    input = eval(input).toString();
    document.getElementById("display").value = input;
  } catch {
    document.getElementById("display").value = "Error";
    input = "";
  }
}