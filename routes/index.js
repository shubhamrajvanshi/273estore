
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
	  res.render('cars');
	  console.log('Rendered cars page');
		};	

exports.routers = function(req, res){
	  res.render('routers');
	  console.log('Rendered routers page');
			};