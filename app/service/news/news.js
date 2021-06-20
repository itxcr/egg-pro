"use strict";

const Service = require("egg").Service;

class NewsService extends Service {
  async getNewsList() {
    let name = ["xcr", "123", "1232"];

    return name;
  }

  async getBaseApi() {
    let api = this.config.api;
    return api;
  }
}

module.exports = NewsService;
