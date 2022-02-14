const list = (req, res, next) => {
  let data = []
  for(var i = 0; i < 10 ; i ++){
    data.push('line' + i)
  }

  res.set('Content-Type','application/json; charset=uft-8')

  // 使用art-tmplate模板后,不再使用res.send发送数据，使用res.render
  // res.send(data);

  // 第一参数 模板引擎配置路径下的list.art 文件，不需要添加后缀名
  res.render('list',{
    data: JSON.stringify(data)
  })
}


exports.list = list;