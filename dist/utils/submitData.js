"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataByID = exports.getData = exports.submitData = void 0;

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

exports.submitData = submitData;

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

exports.getDataByID = getDataByID;

const getData = async (Model, _find, query) => {
  const toFind = await Model.findOne({
    _find: query
  });
  return toFind;
};

exports.getData = getData;