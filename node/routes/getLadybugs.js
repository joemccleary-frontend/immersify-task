const express = require("express");
const router = express.Router();

const ladybugs = require("../data/ladybugs.json")

console.log('get ladybugs')

router.get("/", function (req, res) {
    console.log('get ladybugs')
    res.send(ladybugs)
});

module.exports = router;
