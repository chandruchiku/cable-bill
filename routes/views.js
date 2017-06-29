var express = require("express");
var router = express.Router();

console.log('View init');
//All views rendering is handled in this JS

router.get('/payBill', function(req, res, next) {
    console.log('Get Add User page');   
	res.render('bill/payBill');
});

router.get('/user/addUser', function(req, res, next) {
    console.log('Get Add User page');   
	res.render('user/add');
});

router.get('/user/manageUser', function(req, res, next) {
	res.send('Not Implemented');
});

router.get('/customer/addCustomer', function(req, res, next) {
	res.send('Not Implemented');
});

router.get('/customer/manageCustomer', function(req, res, next) {
	res.send('Not Implemented');
});

router.get('/report/monthlyReport', function(req, res, next) {
	res.send('Not Implemented');
});

router.get('/report/agentWise', function(req, res, next) {
	res.send('Not Implemented');
});

router.get('/report/customer', function(req, res, next) {
	res.send('Not Implemented');
});

module.exports = router;