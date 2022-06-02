"use strict"
const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000;

app.listen(PORT, () => {console.log("estoy vivo!")})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
})
app.get("/productos", (req, res) => {
    res.sendFile(path.join(__dirname, "views/productos.html"))
})
app.get("/productos/producto-1", (req, res) => {
    res.sendFile(path.join(__dirname, "views/productos/producto-1.html"))
})