class ProductPage {
    get addToCartButton() { return $('#product-addtocart-button'); }
    get selectSize() { return $('#option-label-size-143-item-170')}
    get selectColor() { return $('#option-label-color-93-item-49')}
    get clickCartButton() { return $('=shopping cart')}


    async addToCart() {
        await this.addToCartButton.click();
    }

    async goToCartSection() {
        await this.clickCartButton.click();
    }
}

module.exports = new ProductPage();
