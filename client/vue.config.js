module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.xuhaorong.cn',  // Request URL: http://localhost:8080/api/article/lists
                ws: true,
                changeOrigin: true,
                // pathRewrite: { //路径重写
                //     "^/api": ""
                // }
            },
        }
    }
}