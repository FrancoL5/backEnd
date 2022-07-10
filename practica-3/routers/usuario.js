const express = require("express");
const router = express.Router();
const validateUser = require("../controller/validateUser");
const bcrypt = require("bcrypt");
const path = require("path");
const validateSessionUser = require("../controller/validateSessionUser");

router.get("/", (req, res) => {
	console.log(req.session);
	req.session.user && validateSessionUser(req.session.user.usuario)
		? res.redirect("/usuario/bienvenido")
		: res.redirect("/usuario/register");
});

router.get("/register", (req, res) => {
	res.sendFile(path.resolve("views", "register.html"));
});

router.post("/bienvenido", (req, res, next) => {
    if(req.session.user){
        const {usuario, contrasenia} = req.session.user;
        validateUser(usuario, bcrypt.hashSync(contrasenia, 10))
            ? next()
            : res.send("error en el usuario o contrasenia")
    } else{
        res.send("error en el usuario o contrasenia")
    }

}, (req, res) => {
    
});
module.exports = router;
