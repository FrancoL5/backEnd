const bcrypt = require("bcrypt");
const validUser = require("../model/usuario")

const validateUser = (user, passHashed) => {
    const {usuario, contrasenia} = validUser;
    return user === usuario && bcrypt.compareSync(contrasenia, passHashed)
            ? true
            : false 
}

module.exports = validateUser;