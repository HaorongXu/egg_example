'use strict';
const fs = require('fs');
const Controller = require('egg').Controller;
const moment = require('moment');
class ArticleController extends Controller {
    // 添加文章
    async create() {
        const {
            ctx
        } = this;
        const params = {
            ...ctx.request.body,
            create_time: moment().format("YYYY-MM-DD HH:mm:ss")
        }
        const result = await ctx.service.article.create(params);
        if (result) {
            ctx.body = {
                status: 200,
                data: result,
                msg:'文章发布成功！'
            }
        } else {
            ctx.body = {
                status: 500,
                msg: '发布文章失败'
            }
        }
        // ----------------------- 测试代码 base64 转图片 --------------------------
        // const path = 'app/public/img/' + Date.now() + '.png';
        // const base64 = params.img.replace(/^data:image\/\w+;base64,/, ""); //去掉图片base64码前面部分data:image/png;base64
        // // new Buffer 操作权限太大，v6.0后使用Buffer.from()创建构造函数
        // const dataBuffer = new Buffer(base64, 'base64'); //把base64码转成buffer对象，
        // fs.writeFile(path, dataBuffer, function (err) { //用fs写入文件
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log('写入成功！');
        //     }
        // })
        // params.img = path
        // return false
        // -------------------------------------------------
    }
    // 查询文章列表
    async lists() {
        const {
            ctx
        } = this;
        const result = await ctx.service.article.lists();
        if (result) {
            ctx.body = {
                status: 200,
                data: result
            }
        } else {
            ctx.body = {
                status: 500,
                msg: '查询文章列表失败'
            }
        }
    }

    // 查询文章详情
    async detail() {
        const {
            ctx
        } = this;
        const result = await ctx.service.article.detail(ctx.params.id);
        if (result) {
            ctx.body = {
                status: 200,
                data: result
            }
        } else {
            ctx.body = {
                status: 500,
                msg: '查询文章详情失败'
            }
        }
    }
}

module.exports = ArticleController