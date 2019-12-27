'use strict';
const path = require('path');
const fs = require('fs');
const Controller = require('egg').Controller;
class IndexController extends Controller {
  /* async index() {
    this.ctx.body = [
      '<a download href="http://127.0.0.1:7001/download">download</a>', // 前端代码，写完整的路径
      '<br>',
      '<a download href="http://127.0.0.1:7001/download1">download1</a>',
    ].join('');
  } */
  async download() { // 下载
    const { service, ctx } = this;
    // eslint-disable-next-line no-undef
    const code = ctx.query.code;
    let fileNames = ctx.query.fileNames;
    fileNames = (fileNames || '').split(','); // 分割
    const result = await service.fruitDownload.download(code, fileNames);

    if (result.code === 1) {
      ctx.attachment(String(this.filePath));
      ctx.set('Content-Type', 'application/octet-stream');
      ctx.body = result.msg;
    } else { // code不存在
      ctx.status = 500;
      ctx.body = result.data;
      return;
    }

  }
  /* async download2() { // 下载
    const filePath = 'C:\\Users\\wt\\Desktop\\egg-example\\app\\public\\01.docx';
    this.ctx.attachment(filePath);
    this.ctx.set('Content-Type', 'application/octet-stream');
    this.ctx.body = fs.createReadStream(filePath);
  } */
}
module.exports = IndexController;
