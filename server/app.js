const puppeteer = require("puppeteer")

(async () => {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto("https://www.amazon.com")
    await page.screenshot({path: "puppeteerScreenshot.png"})
    await browser.close()
})();