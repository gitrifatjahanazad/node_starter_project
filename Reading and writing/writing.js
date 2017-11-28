var fs = require('fs');
var path = require('path');
fs.writeFile(path.join(__dirname,'data.csv'), 'Hello World!', function (err) {
  if (err) throw err;
  console.log('Writing is done.');
});