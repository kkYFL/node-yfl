const express = require('express')
const app = express()
// body-parser 进行请求体数据解析
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./index')


// 解析 application/json
app.use(bodyParser.json()); 

// 解析 application/x-www-form-urlencoded
// content-type https://www.jianshu.com/p/de5845b4c095
app.use(bodyParser.urlencoded({ extended: false}))


// view engine setup 设置模板引擎
app.engine('art', require('express-art-template'));
app.set('view options', { // 注意此处和官网不一致
    debug: process.env.NODE_ENV !== 'production',
    escape: false // // 是否开启对模板输出语句自动编码功能。为 false 则关闭编码输出功能
    // escape 可以防范 XSS 攻击
});
// 路径
app.set('views', path.join(__dirname, './views'));
// 扩展名 art
app.set('view engine', 'art');


// 静态服务中间件(内置中间件)
app.use(express.static('./public'))


app.use('/', router)


app.listen('8080', () => {
  console.log('localhost:8080')
})


