"use strict"
const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000;

app.set("view engine", "ejs")

app.listen(PORT, () => {console.log("estoy vivo!")})

// INDEX

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../views/index.html"))
    console.log("estoy en " + req.url)
})

//LISTA DE PRODUCTOS

app.get("/productos", (req, res) => {
    res.render(`productos`, {url:req.url})
    console.log("estoy en " + req.url)
})
//PRODUCTOS N

app.get("/productos/producto-:id", (req, res) => {
    res.render(`productos/producto-${req.params.id}`, {url:req.url})

    console.log("estoy en " + req.url)
})