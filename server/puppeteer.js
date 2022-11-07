const puppeteer = require("puppeteer");

async function getAveragePrice(url) {
    let averagePrice = 0;

    // Launch instance of Puppeteer, navigate to UR
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto(url)

    // Scrape prices located in HTML, convert to float, add to prices array
    const getPrices = await page.evaluate(() => {
        let prices = []
        const priceTags = document.querySelectorAll(".sg-row .a-carousel-card .a-price .a-offscreen")

        priceTags.forEach((price) => {
            let priceString = price.innerText
            let priceFloat = parseFloat(priceString.replace("$",""))
            prices.push(priceFloat)
        })

        // Calculate average of scraped prices
        let pricesSum = prices.reduce((price, sum) => {
            return sum + price
        })

        averagePrice = parseFloat((pricesSum / prices.length).toFixed(2))

        return averagePrice
    })
    await browser.close()

    // console.log(getPrices)
    return getPrices
}

module.exports = {getAveragePrice};