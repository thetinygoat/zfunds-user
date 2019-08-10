const mongoose = require("mongoose");
const uuid = require("uuid/v4");
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstname: {
			type: String,
			required: true
		},
		lastname: {
			type: String,
			required: true
		},
		phone: {
			type: String,
			required: true
		},
		roles: {
			type: Array,
			required: true
		},
		id: {
			type: String,
			default: uuid()
		},
		meta: {
			type: String
			// required: true
		}
	},
	{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
