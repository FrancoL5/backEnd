const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const validateUser = require("../controller/validateUser");
const bcrypt = require("bcrypt");
const validateSessionUser = require("../controller/validateSessionUser");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: "SuperSecreto",
		saveUninitialized: true,
		cookie: { maxAge: 1000 * 60 * 60 * 24 },
		resave: false,
	})
);
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
	res.sendFile(path.resolve("views", "index.html"));
});
app.get(
	"/usuario",
	(req, res, next) => {
		console.log(req.session);
		if (req.session.user) {
			next();
		} else {
			res.sendFile(path.resolve("views", "usuario.html"));
		}
	},
	(req, res) => {
        if(validateSessionUser(req.session)){
            res.render(path.resolve("views", "partials", "bienvenido.ejs"), req.session.user);
        }else{
            res.sendFile(path.resolve("views", "usuario.html"));
        }
	}
);
app.post("/usuario/bienvenido", (req, res, next) => {
    const {usuario, contrasenia} = req.body
    if(validateUser(usuario, bcrypt.hashSync(contrasenia, 10))){
        res.render(path.resolve("views", "partials", "bienvenido.ejs"),{usuario: usuario})
    } else{
        req.session.user = {usuario, contrasenia}
        res.render(path.resolve("views", "partials", "bienvenido.ejs"),{usuario: usuario})
    }
});
app.listen(3000, () => console.log("Alive"));
