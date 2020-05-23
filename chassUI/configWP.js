'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = process.env;

var nodeEnv = exports.nodeEnv = env.NODE_ENV || 'development';

var logStars = exports.logStars = function logStars(message) {
  console.info('**********');
  console.info(message);
  console.info('**********');
};

exports.default = {
  port: env.PORT || 8082
};
