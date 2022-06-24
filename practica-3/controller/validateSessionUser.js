const validUser = require("../model/usuario");

const validateSessionUser = (user) => {
	const { usuario, contrasenia } = user;
	return usuario === validUser.usuario &&
		contrasenia === validUser.contrasenia
		? true
		: false;
};

module.exports = validateSessionUser;
