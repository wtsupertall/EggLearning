/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577104898530_8591';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    fruitPath: 'C:\\Users\\wt\\Desktop\\egg-example\\app\\public',
    // fruitPath: path.normalize('C:\\Users\\wt\\Desktop\\egg-example\\app\\public'),
  };

  return {
    ...config,
    ...userConfig,
  };
};
