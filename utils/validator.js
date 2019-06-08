"use strict";

class Validator {
	static isNotEmpty(data) {
		return data === "undefined" ? false : true;
	}
}

module.exports = Validator;
