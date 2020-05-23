'use strict';

var _config = require('./configWP');

var _config2 = _interopRequireDefault(_config);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
//import apiRouter from './api';

server.get('/', function (req, res) {
  res.send('Hello Express');
});

//server.use('/api', apiRouter);
server.use(_express2.default.static('./public'));
server.use(_express2.default.static('./src'));

server.listen(_config2.default.port, function () {
  console.info('Express listening on port', _config2.default.port);
});
