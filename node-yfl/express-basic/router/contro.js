const list = (req, res, next) => {
  let data = '<url>'
  for(var i = 0; i < 10 ; i ++){
    data += `<li>line ${i}</li>`
  }
  data =+ '</ul>'
  res.send(data);
}


exports.list = list;