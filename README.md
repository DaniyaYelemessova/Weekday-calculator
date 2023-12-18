## <div align="center">Weekday calculator</div>

#### <div align="center">💻 _Learning project for Test Driven Development 12/18/2023_ </div>

**_<p align="right">By Daniya Yelemessova, Hayeong Pyeon, Ermek Abdrazakov_**</p>

<p align="center">
  <img src="images/js.png" alt="js" width="30"/>
</p>


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> 🛠️ _Technologies used:_

- HTML
- CSS
- JavaScript
- Visual Studio Code
- GIT
- Node.js and npm
- npm Packages
- Linter(ESLint)
- Testing Framework(Jest)


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> 🚥 _Installation and USAGE_

<details>
To set up and use this project locally for development or testing purposes, follow these steps:

To get started, you'll need to clone this repository to your local machine. Open your terminal or command prompt and use the following command to do so:
1. git clone 
2. Navigate to the Project Directory, using **cd**
3. Open the project using **code .**
4. Install all packages with $ npm install.
5. Start a development server with $ npm run start
6. Linting JS files in the src folder with $ npm run lint
7. Run tests with Jest using $ npm run test
</details>

## <div align="center"> ⌨️ _Tests_

```
describe('Calculator', () => {
    test('should correctly calculate day of the week for a specific date', () => {
        const calculateDay = new Calculator();
        expect(calculateDay.calculate(2023, 12, 18)).toMatch('Monday');
    });
});

describe('Calculator', () => {
    test('should not calculate when date is not valid', () => {
        const calculateDay = new Calculator();
        expect(calculateDay.calculate(2023, 11, 31)).toBe('Cannot calculate: INVALID DATE');
    });
});

```


### <div align="center"> 🤔 _Description:_

This JavaScript application allows users to calculate the day of the week for any given date. Users can input a date, and the app will display the corresponding day of the week. The application handles past dates, future dates, and invalid dates, providing notifications when the input is invalid. The use of class syntax ensures a structured implementation, and Test-Driven Development (TDD) principles are followed to develop robust business logic before integrating user interface functionalities.


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> <img src="images/github.png" alt="github icon" width="30px"> _Link to site on Github Pages:_

- [GitHub page link](https://github.com/DaniyaYelemessova)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

## <div align="center"> _Known Issues_

-no known issues at this time.

## <div align="center"> 📬 _Contact Information_

#### For any questions _[LinkedIn](https://www.linkedin.com/in/daniya-collings/)_

## <div align="center"> 📘 _License and copyright:_

> **_© Daniya Yelemessova, 2023_**  
> ⚖️ _[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)_


