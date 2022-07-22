const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize(
    "libreria",
    process.env.USER,
    process.env.PASS,
    {
        host: "localhost",
        dialect: "mysql",
    }
);

const AuthorModel = sequelize.define("authors", {
    ID_AUTHOR: { type: DataTypes.BIGINT, primaryKey: true },
    FULL_NAME: DataTypes.STRING(255),
    DATE_OF_BIRTH: DataTypes.DATE,
    DATE_OF_DEATH: DataTypes.DATE,
});

// sequelize.sync().then(()=>{})
app.get("/api", (req, res) => {
    return AuthorModel.findAll({
        attributes: [
            "ID_AUTHOR",
            "FULL_NAME",
            "DATE_OF_BIRTH",
            "DATE_OF_DEATH",
        ],
    })
        .then((autores) => {
            return res
                .status(200)
                .json(autores.map(({ dataValues }) => dataValues));
        })
        .catch((err) => res.status(400).json(err));
});


sequelize
    .authenticate()
    .then(() => console.log("La conexión a la base de datos fue exitosa"))
    .catch((err) =>
        console.log("no pudimos conectar con la base de datos\n", err)
    );

app.listen(3000, () => console.log("estoy vivo"));
