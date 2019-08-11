const { Router } = require("express");
const route = Router();
const AuthService = require("../../services/auth");
const { Otp } = require("../../validators");
const { ResponseConstructor } = require("../../utils");
route.post("/otp", async (req, res) => {
	const otpDTO = req.body;
	const errors = Otp.validate(otpDTO);
	if (errors) {
		return res.json(errors);
	}
	const { user } = await AuthService.findIfUserExists({
		phone: otpDTO.phone
	});
	if (user) {
		const responseObj = ResponseConstructor.constructErrorResponse(
			409,
			"conflict",
			"user already exists"
		);
		return res.json(responseObj);
	}
	const response = await AuthService.sendOTP(otpDTO.phone);
	const responseObj = ResponseConstructor.constructSuccessResponse(response);
	return res.json(responseObj);
});

route.post("/signup", async (req, res) => {
	const userDTO = req.body;
	const errors = Otp.validate(userDTO);
	const response = await AuthService.sendOTP("9560702890");
	res.json(response);
});

module.exports = route;
