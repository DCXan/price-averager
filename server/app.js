const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json());

let PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`)
})