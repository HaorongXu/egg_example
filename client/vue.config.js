module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.xuhaorong.cn',
                ws: true,
                changeOrigin: true,
                // pathRewrite: { //路径重写
                //     "^/api": "/api"
                // }
            },
        }
    }
}