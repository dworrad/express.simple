var express = require('express');

var app = express();

app.get('*', function(req, res){
  res.send('Hello World - ' + (new Date()).toString());
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}