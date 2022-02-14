const _ = require('lodash');

function myChunk(arr){
  let arr1 = _.chunk(arr,2);
  return arr1;
}

module.exports = myChunk;