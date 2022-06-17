const express = require("express");
const path = require("path")
const router = express.Router();


router.get("/", (req, res) => res.sendFile(path.resolve("views", "formulario.html")))


router.post("/bienvenido", (req, res) => {
    console.log(req.body)
    res.render(path.resolve("views", "userBienvenido"), {usuario: req.body.usuario, contrasenia: req.body.contrasenia})
})
module.exports = router