const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    // const textInput = req.body.textInput;
    // console.log("received text:", textInput);
    // res.send("form submitted successfully!")
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.post('/submit', (req, res) => {
    const textInput = req.body.textInput;
    console.log("received text: ", textInput);
    res.redirect('/success');
})

app.get('/success', (req, res) => {
    res.send("Form submitted successfully!")
})

app.listen(port, () => {
    console.log(`Example app is running on ${port}`);
})