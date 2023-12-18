import "../src/css/styles.css";
import Calculator from "./js/calculator.js";

function reset() {
    document.getElementById("form").reset();
}
document.addEventListener("DOMContentLoaded", function() {
    function handleForm(e) {    
        e.preventDefault(); 
        const inputYear = parseInt(document.getElementById("year").value);
        const inputMonth = parseInt(document.getElementById("month").value);
        const inputDate = parseInt(document.getElementById("date").value);
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

});
