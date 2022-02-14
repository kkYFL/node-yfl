const fs = require('fs');

fs.watch('./',() => {
  console.log('file changed');
})


