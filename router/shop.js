const express = require('express');
const path = require('path');
const dir_name = require('../util/paths.js');
const router = express.Router();
const admin_data = require('./admin.js');

router.get('/', (req, res, next) => {
    console.log(admin_data.items);
    //res.sendFile(path.join(dir_name, 'views', 'shop.html'));
    res.render('shop.ejs',
        {
            products: admin_data.items,
            page_title: 'Shop Products',
            has_products: admin_data.items.length > 0,
            active_shop: true,
            product_css: true
        });
});

module.exports = router;