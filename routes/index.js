
/*
 * GET home page.
 */
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/cmpe273");
var myschema = new mongoose.Schema({
	category: String,
	brand : String,
	dualBand : String,
	price : String,
	range : String,
	numberofwifi : Number,
	desc : String	
});
var cars2 = mongoose.model('routers',myschema);

// var catalogmodel = mongoose.model('catalog',schema);
// app.set('cars2',cars2);
// app.set('catalogvar',catalogmodel);
// exports.cars2 = cars2;


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
//  var cars2 = require("app").cars2;
//	var cars2 = req.app.get('cars2');
//	var indexcatalog =req.app.get('catalogvar');
//	new cars2({make:"2008"}).save(); 
//	cars2.findOne({},function(err,docs){
//	indexcatalog.findOne({},function(err,docs){	
//		console.log(docs);
//		res.render('cars',{cars3:docs});
//	});
	console.log('Rendered cars page');
		};	

exports.routers = function(req, res){
	// var cars2 = req.app.get('cars2');
	cars2.find({},function(err,docs){
		console.log(docs);
		res.render('routers',{router:docs});
	});
	  //res.render('routers');
	  console.log('Rendered routers page');
			};

exports.rdisplay = function(req,res){
	res.write(req.params.id);
//	res.write(req.params[1]);
//	res.write(req.params[2]);
	res.end();
};