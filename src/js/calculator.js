export default class Calculator {
  constructor() {
    this.daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  }

  calculate(year, month, day) {
    const inputValue = new Date(year, month - 1, day); // because Jan is set to 0
    // using .getDay() will render numbers from 0 to 6
    // ex) 0 would be: this.daysOfWeek[0] === 'Sunday'
    // so we have to make the value from .getDay() as an index
    const dayOfWeek = this.daysOfWeek[inputValue.getDay()];
    return dayOfWeek;
  }
}

// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const d = new Date();
// let day = weekday[d.getDay()];
