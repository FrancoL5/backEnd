"use strict"

const express = require("express");
const app = express();
const index = require("../router/index")
const formularioUser= require("../router/usuario")

app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(3000, () => console.log("estoy vivo") )

app.use("/", index)
app.use("/usuario", formularioUser)
