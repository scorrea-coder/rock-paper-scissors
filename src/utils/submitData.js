const submitData = async (Model, data) => {
  try {
    const createdData = new Model(data);
    await createdData.save();
    if (createdData) {
      return createdData;
    }
    return 'Who will be playing';
  } catch (error) {
    return 'You cannot play rock paper scissors alone, grab your buddy';
  }
};

const getDataByID = async (Model, query) => {
  try {
    const toFind = await Model.findById(query);
    if (toFind) {
      return toFind;
    }
    return 'Couldnt find data';
  } catch (error) {
    return error.message;
  }
};

const getData = async (Model, _find, query) => {
  const toFind = await Model.findOne({ _find: query });
  return toFind;
};

export { submitData, getData, getDataByID };
