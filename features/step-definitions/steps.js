const { Given, When, Then } = require('cucumber');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

Given('Open chrome browser and start application', function () {
    return driver.get('https://www.online-calculator.com/full-screen-calculator/');
});

When('I subtract {int} by {int}', function (int, int2) {
    try {
        webElement = driver.findElement(By.id("canvas"));
        webElement.sendKeys(int)
        webElement.sendKeys("-")
        webElement.sendKeys(int2)
        webElement.sendKeys("=")
    } catch (e) {
        console.log("Failed to send keys")
    }
});

Then('I should be able to see {int} on screen', function (int) {
    // find element calculator screen
    // expect number to be same
    return 'pending';
});

When('I divide {int} by {int}', function (int, int2) {
    try {
        webElement = driver.findElement(By.id("canvas"));
        webElement.sendKeys(int)
        webElement.sendKeys("/")
        webElement.sendKeys(int2)
        webElement.sendKeys("=")
    } catch (e) {
        console.log("Failed to send keys")
    }
});

When('I enter {int} and press CE button', function (int) {
    try {
        webElement = driver.findElement(By.id("canvas"));
        webElement.sendKeys(int)
        webElement.sendKeys("c")
    } catch (e) {
        console.log("Failed to send keys")
    }
});

Then('the screen should be cleared', function () {
    //expect calculator screen to show 0
    return 'pending';
});