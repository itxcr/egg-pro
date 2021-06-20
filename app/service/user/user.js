"use strict";

const Service = require("egg").Service;

class UserService extends Service {
  async getUserInfo() {
    return {
      name: "xcr",
      age: 20,
    };
  }
}

module.exports = UserService;
