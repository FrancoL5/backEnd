const express = require("express");
const path = require("path");
const router = express.Router();

let users = {};
router.get("/", (req, res) =>
  res.sendFile(path.resolve("views", "ingresarUsuario.html"))
);

router.post("/bienvenido", (req, res) => {
  users[req.body.usuario] = {
    usuario: req.body.usuario,
    contrasenia: req.body.contrasenia,
  };
  res.render(path.resolve("views", "userPage", "userBienvenido"), {
    usuario: users[req.body.usuario].usuario,
    contrasenia: users[req.body.usuario].contrasenia,
  });
});

router.post("/bienvenido/:user",
  (req, res, next) => {
    users[req.params.user].contrasenia === req.body.mostrarC
      ? next()
      : res.sendFile(path.resolve("views", "userPage", "userNoBienvenido.html"));
  },    
  (req, res) => {
    res.render(path.resolve("views", "userPage", "userMostrarC"), {
      usuario: users[req.params.user].usuario,
      contrasenia: users[req.params.user].contrasenia,
    });
  }
);
module.exports = router;
