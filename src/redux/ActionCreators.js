export const postFeedback = (name, email, message) => (dispatch) => {
	const newFeedback = {
		name: name,
		email: email,
		message: message
	};
	newFeedback.date = new Date().toISOString();
};
