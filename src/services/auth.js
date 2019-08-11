const userModel = require("../models/user");
const axios = require("axios");
const { Otp } = require("../utils");
const config = require("../config");
class Auth {
	static async sendOTP(phone) {
		const otp = Otp.generateOTP();
		const params = {
			url: "https://control.msg91.com/api/sendotp.php",
			otp: otp,
			sender: "ZFUNDS",
			mobile: `91${phone}`,
			authKey: config.msg91.key,
			message: ``
		};
		const url = `${params.url}?otp=${params.otp}&sender=${params.sender}&message=${params.otp} is your ZFunds verification code&mobile=${params.mobile}&authkey=${params.authKey}`;
		try {
			const response = await axios.post(url);
			const error = Otp.checkError(response.data);
			if (error) {
				return {
					message: "unable to send OTP"
				};
			} else {
				return {
					message: `OTP sent to ${phone}`
				};
			}
		} catch (e) {
			return { error: e };
		}
	}
	static async verifyOTP(phone, otp) {
		const params = {
			url: "https://control.msg91.com/api/verifyRequestOTP.php",
			otp: otp,
			mobile: `91${phone}`,
			authKey: config.msg91.key
		};
		const url = `${params.url}?otp=${params.otp}&mobile=${params.mobile}&authkey=${params.authKey}`;
		try {
			const response = await axios.post(url);
			const error = Otp.checkError(response.data);
			if (error) {
				return {
					message: "unable to verify OTP"
				};
			} else {
				return {
					message: "OTP verified"
				};
			}
		} catch (e) {
			return { error: e };
		}
	}
	static async signup(user) {
		try {
			const newUser = await userModel.create(user);
			return { user: newUser };
		} catch (e) {
			return { error: e };
		}
	}
	static async findIfUserExists(query) {
		try {
			const foundUser = await userModel.findOne(query);
			return { user: foundUser };
		} catch (e) {
			return { error: e };
		}
	}
}

module.exports = Auth;
