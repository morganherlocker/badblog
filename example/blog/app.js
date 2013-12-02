var express = require('express')
  , posts = require('./routes/posts')
  , post = require('./routes/post')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , _ = require('lodash')

var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/img/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res){res.redirect('/post/recent')});
app.get('/posts', posts)
app.get('/post/:name', post)

config = {}
postInfos = []
var i = 1
fs.readFile(__dirname+'/../config.json', function(err, data){
  if(err) throw err
  config = JSON.parse(data)
  fs.readdir(__dirname+'/../posts/', function(err, files){
    _.each(files, function(file){
      fs.readFile(__dirname+'/../posts/'+file, 'utf8', function(err, content){
        var title = content.split('===')[0].replace(/(\r\n|\n|\r)/gm,"")
        var url = title.split(' ').join('-').replace(/(\r\n|\n|\r)/gm,"")
        postInfos.push({id: file, title: title, url: url})
        if(i >= files.length){
          http.createServer(app).listen(app.get('port'), function(){
            console.log('Express server listening on port ' + app.get('port'));
          });
        }
        i++
      })
    })
  })
}) 