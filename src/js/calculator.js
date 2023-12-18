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

    isValidDate(year, month, day) {
        const inputValue = new Date(year, month - 1, day); // because Jan is set to 0
        return (
            inputValue.getFullYear() === year &&
            inputValue.getMonth() === month - 1 &&
            inputValue.getDate() === day
            // 2023-11-31 > not in their data???
        );
    }

    calculate(year, month, day) {
        // call 'isValidDate' function to check validity
        if (!this.isValidDate(year, month, day)) {
            return 'Cannot calculate: INVALID DATE';
        }
        // if valid, proceed to next: 
        const inputValue = new Date(year, month - 1, day); // because Jan is set to 0
        // using .getDay() will render numbers from 0 to 6
        // ex) 0 would be: this.daysOfWeek[0] === 'Sunday'
        // value from .getDay() = an index
        const dayOfWeek = this.daysOfWeek[inputValue.getDay()];
        return dayOfWeek;
    }
}

