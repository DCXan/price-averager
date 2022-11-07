const puppeteer = require("puppeteer");

let averagePrice = 0;
let url = "https://www.amazon.com/s?k=macbook+pro";

async function getAveragePrice() {

    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto(url)

    const getPrices = await page.evaluate(() => {
        let prices = []
        const priceTags = document.querySelectorAll(".a-section .a-price .a-offscreen")

        priceTags.forEach((price) => {
            let priceString = price.innerText
            let priceFloat = parseFloat(priceString.replace("$",""))
            prices.push(priceFloat)
        })

        let pricesSum = prices.reduce((price, sum) => {
            return sum + price
        })

        averagePrice = parseFloat((pricesSum / prices.length).toFixed(2))

        return [prices, averagePrice]
    })
    
    console.log(getPrices)
    await browser.close()
}

getAveragePrice(url)

module.exports = averagePrice;