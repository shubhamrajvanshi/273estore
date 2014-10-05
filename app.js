
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect("mongodb://localhost/cmpe273");
var myschema = new mongoose.Schema({
	make:String
});
var cars2 = mongoose.model('Cars',myschema);
 app.set('cars2',cars2);
//exports.cars2 = cars2;

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/store', routes.store);
app.get('/users', user.list);
app.get('/store/tv',routes.tv);
app.get('/store/cars',routes.cars);
app.get('/store/routers',routes.routers);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
