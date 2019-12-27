'use strict';
const Service = require('egg').Service; // 拉取egg包
const fs = require('fs'); // 拉取fs包
const path = require('path'); // 拉取路径包
class FruitDownloadService extends Service { // 大驼峰命名
  async download(code, fileNames) { // 创建一个下载函数
    const result = {
      code: 1,
      data: null,
      msg: '下载成功',
      filePath: null,
    };
    const { config } = this;
  
    // const filePath = [ '' ];
    // const { logger } = this.app;
    if (fileNames.length === 1) { // 单个文件下载情况；
      result.filePath = path.join(config.fruitPath, `${fileNames[0]}_${code}.docx`); //filePath
      // const filePath = path.resolve(config.fruitPath, `../${fileNames[0]}_${code}.docx`);
      const createStream = fs.createReadStream(filePath); // 可读文件流
      result.data = createStream;
    } else { // 多个文件下载情况；
      for (const fileName of fileNames) { // 多个文件，使用for循环
        result.filePath = path.join(config.fruitPath, '\\', `${fileName}_${code}.docx`);
        // const fileName = path.resolve(config.fruitPath, `../${fileName}_${code}.docx`);

      }
    }
    return result;
  }
}
module.exports = FruitDownloadService;
