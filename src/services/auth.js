const userModel = require("../models/user");
class Auth {
	static async signup(user) {
		try {
			const newUser = await userModel.create(user);
			return { newUser };
		} catch (e) {
			return { error: e };
		}
	}
}

module.exports = Auth;
