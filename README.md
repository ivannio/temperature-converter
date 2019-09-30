# temperature-converter
## Description
 This application is a simple temperature converter from Farhrenheit to Celsius or vice versa. To use it, Select which format you want to convert to, type in the temperature you want to convert, the click the convert button. The converted temperature will be displayed in a box below the convert button.

 The color of the converted temperature depends on that value; If the temperature is greater than 90F/32C the color of the converted temperature will be red. If the temperature is less than 32F/0C the color of the converted temperature will be blue. Any other color will be displayed in green.

## Screenshots
![temp-converter](https://raw.githubusercontent.com/ivannio/temperature-converter/master/screenshots/temp-converter.png)

## How To Run
* Clone this GitHub Repo
* Install [http-server](https://www.npmjs.com/package/http-server) and [npm](https://www.npmjs.com)
* In the root directory of this project, run the following command: `http-server -p 8080`
* In your browser, navigate to `http://localhost:8080`