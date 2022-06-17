"use strict"

const express = require("express")
const app = express();
const path = require("path")
app.listen(3000, () => console.log("estoy vivo"))

app.use(express.static(path.resolve("public")))
app.get("/", (req, res)=>{
    console.log("conectado a /")
    res.sendFile(path.resolve("public/index.html"))
})