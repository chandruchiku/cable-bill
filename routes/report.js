"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var router = express.Router();
// Require our controllers
var report_controller = require('../controllers/reportController');
/// CUSOMTER ROUTES ///
/* POST request for creating Book. */
router.post('/monthly', report_controller.report_create_post);
// POST request to delete Book
router.post('/bills', report_controller.report_delete_post);
// POST request to update Book
router.post('/agent', report_controller.report_update_post);
exports.default = router;
//# sourceMappingURL=report.js.map