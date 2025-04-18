class CartPage {
    get cartButton() { return $('=shopping cart'); }
    get clickDiscountLink() { return $('#block-discount-heading'); }
    get couponInput() { return $('#coupon_code'); }
    get applyCouponBtn() { return $('.action.apply.primary'); }
    get couponMessage() { return $('//div[@role="alert"]'); } 

    async applyCoupon(code) {
        await this.clickDiscountLink.click();
        await this.couponInput.setValue(code);
        await this.applyCouponBtn.click();
    }

    async openCart() {
        await this.cartButton.click();
    }
}
module.exports = new CartPage();
