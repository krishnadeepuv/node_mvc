const Product = require('../models/product.js');

exports.get_add_product_page = (req, res, next) => {
    //res.sendFile(path.join(dir_name, 'views', 'admin.html'));
    res.render('admin.ejs', { page_title: 'Manage Inventory' });
}

exports.post_add_product = (req, res, next) => {
    //console.log(req.body);
    const pobj = new Product();
    pobj.add_item(JSON.parse(JSON.stringify(req.body)));
    res.redirect('/');
}

exports.get_products = (req, res, next) => {
    const items = Product.fetch_products();
    //res.sendFile(path.join(dir_name, 'views', 'shop.html'));
    res.render('shop.ejs',
        {
            products: items,
            page_title: 'Shop Products',
            has_products: items.length > 0,
            active_shop: true,
            product_css: true
        });
}