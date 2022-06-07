"use strict"
const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000;

app.listen(PORT, () => {console.log("estoy vivo!")})

// INDEX

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
})

//LISTA DE PRODUCTOS

app.get("/productos", (req, res) => {
    res.sendFile(path.join(__dirname, "views/productos.html"))
})

//PRODUCTOS N

app.get("/productos/producto-:id", (req, res) => {
    res.sendFile(path.join(__dirname, `views/productos/producto-${req.params.id}.html`))
})