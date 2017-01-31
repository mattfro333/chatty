var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('assets'));
app.use(bodyParser.json());
var messages = [{name: 'Joe', message: 'test message', time: new Date()}];
//===GET ENDPOINTS==================
app.get('/messages', function(req, res, next) {
  res.status(200).json({ messages: messages })
});
//===POST ENDPOINTS=================
app.post('/messages', function(req, res, next) {
  messages.push({message: req.body.message, time: new Date(), name: req.body.name});
  res.status(200).json({messages: messages});
})
var port = 4040
app.listen(port, function() {
  console.log('listening to port: ', port);
})
