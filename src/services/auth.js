const userModel = require("../models/user");
class Auth {
	static async signup(user) {
		try {
			const user = await userModel.create();
			return { user };
		} catch (e) {
			return { error: e };
		}
	}
}

module.exports = Auth;
