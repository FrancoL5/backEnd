const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();
const sequelize = new Sequelize(
    "libreria",
    process.env.USER,
    process.env.PASS,
    {
        host: "localhost",
        dialect: "mysql",
        define: {freezeTableName:true}
    }
);
const authenticate = () => {
    sequelize
        .authenticate()
        .then(() => console.log("La conexión a la base de datos fue exitosa"))
        .catch((err) =>
            console.log("no pudimos conectar con la base de datos\n", err)
        );
};

module.exports = {sequelize, authenticate};
