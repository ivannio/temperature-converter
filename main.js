console.log("main.js is linked");

const toCelsius = (fahrenheit) => {
    let offset = fahrenheit - 32;
    let converted = offset * (5/9);
    console.log(Math.round(converted * 100) / 100);
}

const toFahrenheit = (celsius) => {
    let offset = celsius * (9/5);
    let converted = offset + 32;
    console.log(Math.round(converted * 100) / 100);
}

