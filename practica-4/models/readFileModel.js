const fs = require("fs").promises

const readFile = async (dir) => JSON.parse(await fs.readFile(dir))
    


module.exports = readFile