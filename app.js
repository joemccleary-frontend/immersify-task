const express = require('express')
require("dotenv").config();
const app = express(),
    bodyParser = require("body-parser");
const path = require('path')
const port = process.env.PORT || 9000

const getLadybugs = require("./node/routes/getLadybugs")

app.use(bodyParser.json());

app.use(express.static("build"));


process.on("uncaughtException", function (error) {
    console.log(error.stack);
});


app.use('/getLadybugs', getLadybugs)


app.get('/api/test', (req, res) => {
    console.log('api test')
    res.send('success')
})


if (process.env.NODE_ENV === "production") {
    app.get("/productiontest", (req, res) => {
        if (req.header("x-forwarded-proto") !== "https") {
            
        }
        else res.send('Production test success on https secure')
    });
}

app.listen(port, (err) => {
    if (err) return console.log(err)
    console.log("server running on port: ", port)
})