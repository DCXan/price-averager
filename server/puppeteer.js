const puppeteer = require("puppeteer");

let averagePrice = 0;
// let url = `https://www.amazon.com/s?k=${item}`;

async function getAveragePrice(url) {

    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto(url)

    const getPrices = await page.evaluate(() => {
        let prices = []
        const priceTags = document.querySelectorAll(".sg-row .a-carousel-card .a-price .a-offscreen")

        priceTags.forEach((price) => {
            let priceString = price.innerText
            let priceFloat = parseFloat(priceString.replace("$",""))
            prices.push(priceFloat)
        })

        let pricesSum = prices.reduce((price, sum) => {
            return sum + price
        })

        averagePrice = parseFloat((pricesSum / prices.length).toFixed(2))

        return averagePrice
    })
    
    console.log(getPrices)
    await browser.close()
    return averagePrice
}

// getAveragePrice(url)

module.exports = {getAveragePrice};