const submitData = async (model, data) => {
	const createdData = new model(data);
	await createdData.save();
};

module.exports = submitData;