const express = require("express");
const morgan = require("morgan")
const app = express();
const routs = require("../routers/crud.routes")
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/",routs)
app.listen(3000,() => console.log("estoy vivo"))