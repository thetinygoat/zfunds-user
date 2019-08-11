const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });
const schema = {
	properties: {
		phone: {
			type: "string",
			maxLength: 10,
			minLength: 10
		}
	},
	required: ["phone"]
};

const validate = DTO => {
	const valid = ajv.validate(schema, DTO);
	if (!valid) return { errors: ajv.errors };
	return null;
};

exports.validate = validate;
