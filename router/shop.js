const express = require('express');
const path = require('path');
const dir_name = require('../util/paths.js');
const router = express.Router();
const admin_router = require('./admin.js');
const product_controller = require('../controller/products.js')

router.get('/', product_controller.get_products);

module.exports = router;