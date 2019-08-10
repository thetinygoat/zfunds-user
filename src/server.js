const mongoose = require("mongoose");
const logger = require("morgan");
const app = require("./index");
const config = require("./config");

async function startServer() {
	try {
		await mongoose.connect(config.mongo.url, {
			useNewUrlParser: true,
			useCreateIndex: true
		});
		app.listen(config.express.port, e => {
			if (e) {
				throw new Error(e);
				process.exit(1);
			}
		});
	} catch (e) {
		throw new Error(e);
		process.exit(1);
	}
}

startServer();
