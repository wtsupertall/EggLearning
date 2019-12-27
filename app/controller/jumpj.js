'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');


class LoginController extends Controller {
  async login() {

    this.ctx.body = await fs.readFileSync('C:/Users/wangtong/Desktop/egg-example/app/view/html/login.html').toString();
  }
}

module.exports = LoginController;
