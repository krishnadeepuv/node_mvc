const express = require('express');
const path = require('path');
const dir_name = require('../util/paths.js');
const router = express.Router();

const items = [];

router.get('/add-product', (req, res, next) => {
    //res.sendFile(path.join(dir_name, 'views', 'admin.html'));
    res.render('admin.ejs', { page_title: 'Manage Inventory' });
})

router.post('/product', (req, res, next) => {
    //console.log(req.body);
    items.push(JSON.parse(JSON.stringify(req.body)));
    res.redirect('/');
});

// making custom exports 
exports.router = router
exports.items = items
//module.exports = router;