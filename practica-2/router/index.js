const express = require('express');
const path = require("path")
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.resolve("views", "index.html"))
    console.log("estas en "+ req.originalUrl)

})

module.exports = router 