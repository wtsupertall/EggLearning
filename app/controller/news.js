'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async new() {
    const { ctx } = this;
    ctx.body = 'news';
  }
}

module.exports = NewsController;
