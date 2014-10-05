
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.redirect('/store');
  
  console.log('Redirected to Store index page');
};
exports.store = function(req, res){
	  res.render('index');
	  console.log('Rendered index page');
	};

exports.tv = function(req, res){
	  res.render('tv');
	  console.log('Rendered TV page');
	};
	
exports.cars = function(req, res){
	// var cars2 = require("app").cars2;
	var cars2 = req.app.get('cars2');
	new cars2({make:"2008"}).save(); 
	cars2.findOne({},function(err,docs){
		console.log(docs);
		res.render('cars',{cars3:docs});
	});
	console.log('Rendered cars page');
		};	

exports.routers = function(req, res){
	  res.render('routers');
	  console.log('Rendered routers page');
			};