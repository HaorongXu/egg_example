module.exports = {
    devServer: {
        proxy: {
            '/article': {
                target: 'http://localhost:7001',
                ws: true, //允许 webservice 服务
                changeOrgin: true //开启虚拟服务器去请求代理服务器 http://localhost:7001
            }
        }
    }
}