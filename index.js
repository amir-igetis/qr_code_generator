const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    const textInput = req.body.textInput;
    console.log("received text:", textInput);
    res.send("form submitted successgully!")
    // res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(port, () => {
    console.log(`Example app is running on ${port}`);
})