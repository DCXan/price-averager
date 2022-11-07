const express = require("express");
const {getAveragePrice} = require('./puppeteer')

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

let PORT = process.env.PORT || 8000

app.get("/:item", async (req, res) => {
    const item = req.params.item
    const url = `https://www.amazon.com/s?k=${item}`
    let averagePrice = await getAveragePrice(url)
    res.json({success: true, averagePrice: averagePrice})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`)
})