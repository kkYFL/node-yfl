const fs = require('fs')
// 压缩
const { createGzip } = require('zlib')

const gzip = createGzip()

// 读流
const readStream = fs.createReadStream('./logs.txt')
// 写流
// const writeStream = fs.createWriteStream('./logs.gzip')
const writeStream = fs.createWriteStream('./log2.txt')

// 管道
// readStream.pipe(gzip).pipe(writeStream);

readStream.pipe(writeStream)