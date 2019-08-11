process.env.NODE_ENV = process.env.NODE_ENV || "development";
module.exports = {
	express: {
		port: 8080
	},
	mongo: {
		url:
			"mongodb+srv://thetinygoat:bkqtLBP4mtYughg!@cluster0-q32qu.mongodb.net/zfunds-user?retryWrites=true&w=majority"
	},
	msg91: {
		key: "281947A3cwsoqq5d0b590c"
	}
};
