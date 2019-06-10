"use strict";

class Validator {
  static isNotEmpty(data) {
    return data !== undefined && data !== '';
  }

}

module.exports = Validator;