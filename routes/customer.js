
var express = require('express');
var router = express.Router();
// Require our controllers
var customer_controller = require('../controllers/customerController');
/// CUSOMTER ROUTES ///
/* POST request for creating Book. */
router.post('/add', customer_controller.customer_create_post);
// POST request to delete Book
router.post('/:id/delete', customer_controller.customer_delete_post);
// POST request to update Book
router.post('/:id/update', customer_controller.customer_update_post);
/* GET request for one Book. */
router.get('/:id', customer_controller.customer_detail);
/* GET request for list of all Book. */
router.get('/all', customer_controller.customer_list);

module.exports = router;