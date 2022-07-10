const fs = require("fs").promises

const writeFile = async (dir, data) => await fs.writeFile(dir, JSON.stringify(data, null, 2))

module.exports = writeFile