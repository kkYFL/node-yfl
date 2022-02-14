const express = require('express')

// 路由中间件
const router = express.Router()

const { list } = require('./contro')

// // 匹配/
// router.get('/',(req,res,next) => {
//   res.send('Hello')
// })

// // get 请求
// // 匹配 /index
// router.get('/index',(req,res,next) => {
//   // query express 对req进行了加强，query可以取到入参
//   const query = req.query
//   console.log(query)
//   res.send(query);
// })


// // post请求（post请求需要postMan工具配合调用）
// // 匹配 /index
// // 增加数据
// router.post('/index',(req,res,next) => {
//   // post 请求通过body获取参数
//   const data = req.body
//   console.log(data)
//   res.send(data)
// })

// // 修改数据（覆盖式修改）
// router.put('/index',(req,res,next) => {
//   res.send('put response')
// })

// // 修改数据（增量修改）
// router.patch('/index',(req,res,next) => {
//   res.send('patch response');
// })

// // 删除数据
// router.delete('/index',(req,res,next) => {
//   res.send('delete response')
// })


// 所有的请求方式都可以接受（get/post/put/patch/delete）
// router.all('/index',(req,res,next) => {
//   res.send('hello');
// })


router.get('/api/list',list)


module.exports = router;