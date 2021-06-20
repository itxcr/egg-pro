"use strict";

const Controller = require("egg").Controller;

class NewsController extends Controller {
  async index() {
    // this.ctx.body = "新闻";

    // 调用服务
    let name = await this.service.news.news.getNewsList()

    await this.ctx.render('/news/index.ejs', {
      name
    })
  }

  async content() {
    console.log(this.ctx.query);
    this.ctx.body = `新闻详情${JSON.stringify(this.ctx.query)}`;
  }

  async newsList() {
    console.log(this.ctx.params);
    this.ctx.body = `新闻列表${JSON.stringify(this.ctx.params)}`;
  }

  async getBaseApi() {
    let api = await this.service.news.news.getBaseApi()
    this.ctx.body = `获取基地址${JSON.stringify(api)}`;
  }


}

module.exports = NewsController;
