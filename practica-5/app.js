const express = require("express");
const morgan = require("morgan");
const {authenticate} = require("./utils/sequelize");
const router = require("./routers/authorData.routes")
const app = express();


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router)
authenticate()


app.listen(3000, () => console.log("estoy vivo"));
