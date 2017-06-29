/*
 * GET home page.
 */
var express = require("express");
var router = express.Router();
var User = require("../models/user");
var jwt = require('jsonwebtoken');

router.get('/setup', function(req, res) {

	// create a sample user
	var chandu = new User({
		name: 'Tester',
		username: "admin",
		password: "enKododu",
		role: "admin",
		created_at: new Date(),
		updated_at: new Date()
	});

	// save the sample user
	chandu.save(function(err) {
		if (err) throw err;

		console.log('User saved successfully');
		res.json({
			success: true
		});
	});
});

router.get('/', function(req, res) {
	res.render('dashboard', {
		title: 'Home'
	});
});

//Login page render -GET
router.get('/login', function(req, res, next) {
	res.render('login', {
		title: 'Login'
	});
});

//Login Request - POST
router.post('/login', function(req, res, next) {
	console.log("POst requested recieved for login authentication");
	console.log("Username", req.body);
	// find the user
	User.findOne({
		username: req.body.Username
	}, function(err, user) {

		if (err) throw err;

		if (!user) {
			res.json({
				success: false,
				message: 'Authentication failed. User not found.'
			});
		} else if (user) {

			user.comparePassword(req.body.Password, function(err, isMatch) {
				console.log("Password comparision error if any:", err);
				console.log("Is Match:", isMatch);
				
				//-------------START-------------Only during development
				if(err){
					res.json({
						success: false,
						message: err
					});
					return;
				}
				//--------------END------------Only during development 
				
				
				if (isMatch && !err) {
					// if user is found and password is right
					// create a token
					var token = jwt.sign(user, req.app.get('superSecret'), {
						expiresIn: 1440 // expires in 24 hours
					});

					// return the information including token as JSON
					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token
					});
				} else {
					res.json({
						success: false,
						message: 'Authentication failed. Wrong password.'
					});
				}
			});
		}

	});
});
module.exports = router;