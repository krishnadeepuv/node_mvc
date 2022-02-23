const path = require('path');
const fs = require('fs');
const main_path = require('../util/paths.js');
module.exports = class Product {

    constructor() { }

    add_item(title) {
        let products = [];
        fs.readFile(path.join(main_path, "data", "products.json"), (err, content) => {
            const p = path.join(main_path, "data", "products.json");
            if (!err)
                products = JSON.parse(content);
            products.push(title);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });

        });
        //products.push(title);
    }

    static fetch_products(cb) {
        fs.readFile(path.join(main_path, "data", "products.json"), (err, content) => {

            if (!err)
                cb(JSON.parse(content));
            else {
                cb([]);
            }
        });

        // return producs;
    }
}