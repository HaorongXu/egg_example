module.exports = {
    publicPath:'/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.xuhaorong.cn:7001',
                ws: true, //允许 webservice 服务
                secure : false,
                changeOrgin: true, //开启虚拟服务器去请求代理服务器 http://localhost:7001
                pathRewrite: {  //路径重写
                    "^/api": ""
                }
            }
        }
    }
}
