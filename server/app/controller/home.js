'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,
      app
    } = this;
    try {
      const res = await app.mysql.select('article');
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;