const readFile = require("../models/readFileModel");
const writeFile = require("../models/writeFileModel")
const dir = "./db/data.json"
const readInfo = async (req, res) => {
    const data = await readFile(dir)
    return res.status(200).json(data)
}

const saveInfo = async (req, res) => {
    const data = (await readFile(dir))
    const info = req.query.data
    console.log(info.length);
    data.push({data: info.length > 100 ? info.slice(0, 100) : info})
    await writeFile(dir,data )
    return res.status(200).json("data stored, total data: "+ data.length)
}

const reset = async (req, res) => {
    writeFile(dir, [])
    return res.status(200).json("data reseted")
}
module.exports = {readInfo, saveInfo, reset}