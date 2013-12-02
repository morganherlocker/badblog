var fs = require('fs'),
    path = require('path'),
    marked = require('marked'),
    _ = require('lodash')

module.exports = function(req, res){
  if(req.params.name === 'recent'){
    var recentName = postInfos[postInfos.length - 1].id
    fs.readFile(__dirname+'/../../posts/'+recentName, 'utf8', function(err, content){
      var htmlContent = marked(content)
      res.render('index', {config: config, content: htmlContent});
    })
  }
  else {
    var post = _.find(postInfos, {url: req.params.name})
    fs.readFile(__dirname+'/../../posts/'+post.id, 'utf8', function(err, content){
      var htmlContent = marked(content)
      res.render('index', {config: config, content: htmlContent});
    })
  }
};