import "../src/css/styles.css";
import Calculator from "./js/calculator";

function reset() {
  document.getElementById("form").reset();
}

function handleForm(e) {
  e.preventDefault();
  const inputYear = document.getElementById("year").value;
  const inputMonth = document.getElementById("month").value;
  const inputDate = document.getElementById("date").value;
  const output = document.getElementById("output");
  if (inputYear && inputMonth && inputDate) {
    const calculateDay = new Calculator();
    output.textContent = calculateDay.calculate(
      inputYear,
      inputMonth,
      inputDate
    );
    reset();
  } else {
    output.textContent = 'No date to calculate';
  }
}

document.getElementById("form").addEventListener("submit", handleForm);
