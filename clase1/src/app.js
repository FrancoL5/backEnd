"use strict"
const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000;

app.listen(PORT, () => {console.log("estoy vivo!")})

app.get("/", (req, res) => {
    console.log("home")
    res.sendFile(path.join(__dirname, "views/index.html"))
})