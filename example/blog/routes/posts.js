var fs = require('fs'),
    path = require('path'),
    _ = require('lodash')

module.exports = function(req, res){
  res.render('posts', {config: config, posts: postInfos});
};