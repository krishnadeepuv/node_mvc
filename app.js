//#region imports
const http = require('http');
const express = require('express');
const body_parser = require('body-parser');
const admin_data = require('./router/admin.js');
const shop_route = require('./router/shop.js');
const path = require('path');
const error_controller = require('./controller/error.js');
//#endregion

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin_data.router);
app.use(shop_route);

app.use(error_controller.get_404_page);
app.listen(3000);