const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto("https://www.amazon.com/s?k=house+plants")

    const getPrices = await page.evaluate(() => {
        const priceTags = document.querySelectorAll(".sg-row .a-carousel-card .a-price .a-offscreen")
        // .s-result-item.s-asin.sg-col-0-of-12.sg-col-16-of-20.sg-col.s-widget-spacing-small.sg-col-12-of-16

        let prices = []
        priceTags.forEach((price) => {
            prices.push(price.innerText)
        })

        return prices
    })
    
    console.log(getPrices)
    // await page.screenshot({path: "puppeteer_screenshot.png"})
    await browser.close()
})();