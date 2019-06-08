const submitData = async (Model, data) => {
	const createdData = new Model(data);
	await createdData.save();
};

module.exports = submitData;
