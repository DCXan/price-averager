const express = require("express");
// const axios = require("axios");
// const cheerio = require("cheerio");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let PORT = process.env.PORT || 8000

// let averagePrice = require("./puppeteer")


// let url = "https://www.amazon.com/s?k=house+plants"

// axios(url)
//     .then(response => {
//         const html = response.data
//         const pageData = cheerio.load(html)
//         const prices = []
//         pageData('.sg-row .a-carousel-card .a-price .a-offscreen', html).each(function(){
//             const price = pageData(this).text()
//             prices.push(price)
//         })
//         console.log(prices)
//     }).catch(err => console.log(err))



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`)
})