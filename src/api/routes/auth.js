const { Router } = require("express");
const route = Router();
const AuthService = require("../../services/auth");
const Joi = require("@hapi/joi");

route.post("/", async (req, res) => {
	const userDTO = req.body;
	// const schema = Joi.object().keys({
	// 	name: Joi.string()
	// });
	const response = await AuthService.signup(userDTO);
	res.json(response);
});

module.exports = route;
