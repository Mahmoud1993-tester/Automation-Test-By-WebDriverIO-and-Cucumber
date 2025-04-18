class CartPage {
    get cartItems() { return $$('.cart.item'); }

    async isProductInCart(productName) {
        for (const item of await this.cartItems) {
            const name = await item.getText();
            if (name.toLowerCase().includes(productName.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
}

module.exports = new CartPage();
