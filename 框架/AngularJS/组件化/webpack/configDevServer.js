const server = {
    contentBase: '../dist',
    port: '8080',
    host: 'localhost',
    inline: true, // 可以监控js变化
    hot: true, // 热启动
    compress: true,
    watchContentBase: true,
    proxy: {//设置代理服务器，用于调试接口
        '/api':{
            target:'http://www.baidu.com',
            pathRewrite:{"^/api": "/api"}//重写路径
        }
    }
}
module.exports = server