"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    let name = await this.service.news.news.getNewsList();

    let user = await this.service.user.user.getUserInfo();

    await this.ctx.render("/home/home.ejs", {
      name,
      user,
    });

    // this.ctx.body = `${name} ${JSON.stringify(user)}`;
  }

  async getApi() {
    let api = await this.service.news.news.getBaseApi();
    this.ctx.body = api;
  }
}

module.exports = HomeController;
