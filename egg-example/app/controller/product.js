const Controller = require('egg').Controller;

class ProdectController extends Controller {
    async index() {
        const {
            ctx
        } = this;
        const res = await ctx.service.product.index()
        console.log(res);
        ctx.body = res;
    }
    // GET query 传参
    async detail() {
        const {
            ctx
        } = this;
        console.log(ctx.query); // 获取 url？id = 1  输出 {id:1}
        ctx.body = `id=${ctx.query.id}`
    }
    // GET params 传参
    async detail2() {
        const {
            ctx
        } = this;
        console.log(ctx.params); // 获取 url/1  输出 {id:1}
        ctx.body = `id=${ctx.params.id}`
    }
    // POST 提交
    async create() {
        const {
            ctx
        } = this;
        console.log(ctx.request.body);
        const {
            name,
            weight
        } = ctx.request.body;
        ctx.body = {
            name,
            weight
        }
    }
    // put 修改
    async update() {
        const {
            ctx
        } = this;
        console.log(ctx.params);
        ctx.body = {
            id: ctx.params.id
        }
    }
    // delete 删除
    delete() {
        const {
            ctx
        } = this;
        console.log(ctx.params);
        ctx.body = {
            id: ctx.params.id
        }
    }
}

module.exports = ProdectController;