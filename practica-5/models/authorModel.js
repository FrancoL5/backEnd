const { DataTypes } = require("sequelize")
const {sequelize} = require("../utils/sequelize")

const AuthorModel = sequelize.define("authors", {
    ID_AUTHOR: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement:true },
    FULL_NAME: DataTypes.STRING(255),
    DATE_OF_BIRTH: DataTypes.DATE,
    DATE_OF_DEATH: DataTypes.DATE,
},{timestamps:false});


module.exports = AuthorModel