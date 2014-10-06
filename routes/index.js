
/*
 * GET home page.
 */
var mongoose = require('mongoose');
//var monk = require('monk');
//var db = monk('localhost:27017/cmpe273');
mongoose.connect("mongodb://localhost/cmpe273");

//exports.tv = function(req,res){
//	//var db = req.db;
//	console.log("my db name is " + db);
//	var collection = db.get('tv');
//	collection.find({},{},function(e,docs){
//		console.log(docs[0].brand);
//		res.render('tv',{"tvs":docs});
//		});  
//};




//Creating Schema's
var routerschema = new mongoose.Schema({
	category: String,
	brand : String,
	dualBand : String,
	price : String,
	range : String,
	numberofwifi : Number,
	desc : String	
});

var tvschema = new mongoose.Schema({
	category : String,
	brand : String,
	diagl : Number,
	type : String,
	length : Number,
	width : Number,
	height : Number,
	price : String,
	desc : String,
	warnty : String
});

var carschema = new mongoose.Schema({
	category : String,
	make : String,
	model : String,
	price : String,
	yom : String,
	condition : String,
	mileage : String,
	desc : String
});



//Mongo to mongoose mapping
var carmongo = mongoose.model('cars',carschema);
var tvmongo = mongoose.model('tv',tvschema);
var routermongo = mongoose.model('routers',routerschema);
//console.log(tvmongo);
//console.log(carmongo);
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

exports.tv = function(req,res){
	tvmongo.find({},function(err,docs){
	//	console.log(docs);
		res.render('tv',{"tvs":docs});
	//	console.log(docs);
	});
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
	carmongo.find({},function(err,docs){
	res.render('cars',{cars:docs});
	});
	console.log('Rendered cars page');
		};	

exports.routers = function(req, res){
	// var cars2 = req.app.get('cars2');
	routermongo.find({},function(err,docs){
	//	console.log(docs);
		res.render('routers',{router:docs});
	});
	  
	  console.log('Rendered routers page');
			};

exports.rdisplay = function(req,res){
	var iddata = req.params.id;
	routermongo.findOne({brand:iddata},function(err,docs){
	res.render('idr',{data:docs});
//	res.write(req.params.id);
	});
};

exports.cdisplay = function(req,res){
	var iddata =req.params.id;
	carmongo.findOne({model:iddata},function(err,docs){
//		console.log(docs);
		res.render('id',{data:docs});
//	res.write(req.params.id);
});
};

exports.tdisplay = function(req,res){
	var iddata = req.params.id;
	tvmongo.findOne({brand:iddata},function(err,docs){
		console.log(docs);
	res.render('idt',{"data":docs});
//	res.write(req.params.id);
	});
};