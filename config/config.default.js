/* eslint valid-jsdoc: "off" */

"use strict";
const path = require("path");
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1611740173282_2749";

  // add your middleware config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.api = `http://itxcr.com`

  return {
    ...config,
    ...userConfig,
  };
};
