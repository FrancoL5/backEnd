const { response } = require("express");
const AuthorModel = require("../models/authorModel");

const searchAuthors = async (req, res) => {
    return await AuthorModel.findAll({
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
                .json(autores.map(({dataValues} ) => dataValues));
        })
        .catch((err) => res.status(400).json(err));
};
const addAuthor = async (req, res) => {
    AuthorModel.sync()
    const { author, dateOfBirth, dateOfDeath } = req.query;

    await AuthorModel.create({
        FULL_NAME: author,
        DATE_OF_BIRTH: dateOfBirth,
        DATE_OF_DEATH: dateOfDeath,
    })
        .then((result) => res.status(200).json(result.toJSON()))
        .catch((err) => res.status(400).json(err));
};

const deleteAuthor = async (req, res) => {
    const ids = JSON.parse(req.query.id)
    ids.forEach(async (id) => {
        await AuthorModel.destroy({
            where:{
                ID_AUTHOR: id
            }
        })
        .then((data) => console.log(`${data} author was eliminated`))
        .catch(()=> {
            console.log("there was an error");
        })
    });
    return res.status(200).json("data eliminated from DB")
}
module.exports = { searchAuthors, addAuthor,deleteAuthor };
