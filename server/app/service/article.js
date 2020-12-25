const Service = require('egg').Service;

class ArticleService extends Service {
    // 添加文章
    async create(params) {
        const {
            app
        } = this;
        try {
            const result = await app.mysql.insert('article', params)
            return result
        } catch (error) {
            return null
        }
    }
    // 获取文章列表
    async lists() {
        const {
            app
        } = this;
        try {
            const result = await app.mysql.select('article');
            return result
        } catch (error) {
            console.log(error);
            return null
        }
    }

    async detail(id) {
        const {
            app
        } = this;
        console.log(id);
        if (!id) {
            return null
        }
        try {
            const result = await app.mysql.get('article', {
                id
            })
            console.log(result);
            return result
        } catch (error) {
            console.log(error);
            return null
        }
    }
}

module.exports = ArticleService;