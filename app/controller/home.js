'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '测试下载,/download';
  }
}

module.exports = HomeController;
