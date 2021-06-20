"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/news", controller.news.index);
  router.get("/newscontent", controller.news.content);
  router.get("/newslist/:id", controller.news.newsList);
  router.get("/getapi", controller.news.getBaseApi);
};
