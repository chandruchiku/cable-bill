
var express = require('express');
var router = express.Router();
// Require our controllers
var user_controller = require('../controllers/userController');
/// CUSOMTER ROUTES ///
/* POST request for creating user. */
router.post('/add', user_controller.user_create_post);
// POST request to delete user
router.post('/:id/delete', user_controller.user_delete_post);
// POST request to update user
router.post('/:id/update', user_controller.user_update_post);
/* GET request for one user. */
router.get('/:id', user_controller.user_detail);
/* GET request for list of all user. */
router.get('/all', user_controller.user_list);

module.exports = router;