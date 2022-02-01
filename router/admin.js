const express = require('express');
const path = require('path');
const dir_name = require('../util/paths.js');
const router = express.Router();
const product_controller = require('../controller/products.js');

router.get('/add-product', product_controller.get_add_product_page)
router.post('/product', product_controller.post_add_product);

// making custom exports 
exports.router = router;
//exports.items = items
//module.exports = router;