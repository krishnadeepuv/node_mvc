const products = []

module.exports = class Product {

    constructor() { }

    add_item(title) {
        products.push(title);
    }

    static fetch_products() {
        return products;
    }
}