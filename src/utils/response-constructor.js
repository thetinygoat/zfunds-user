const constructErrorResponse = (status, title, detail) => {
	const response = {
		status: status,
		title: title,
		detail: detail
	};
	return { errors: [response] };
};
const constructSuccessResponse = data => {
	return { data: data };
};

exports.constructErrorResponse = constructErrorResponse;
exports.constructSuccessResponse = constructSuccessResponse;
