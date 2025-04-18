class HomePage {
    get searchInput() {
        return $('#search');
    }


    get productAddToCart() {
        return $('#product-addtocart-button'); 
    }

    get viewCartButton() {
        return $('=shopping cart');
    }

    get clickCuponLink() {
        return $('#block-discount-heading')
    }

    get couponInput() {
        return $('#coupon_code');
    }

    get applyCouponButton() {
        return $('.action.apply.primary'); 
    }

    get successMessage() {
        return $('//*[@role="alert"]');
    }

    get errorMessage() {
        return $('//*[@role="alert"]'); 
    }

    async open() {
        await browser.url('https://magento.softwaretestingboard.com/');
    }

    async searchAndAddToCart(productName) {
        await this.searchInput.setValue(productName);
        await browser.pause(2000);
        await this.productAddToCart.click();
        await browser.pause(1000);
        await this.viewCartButton.click();
    }

    async applyCoupon(code) {
        await this.clickCuponLink.click();
        await this.couponInput.setValue(code);
        await this.applyCouponButton.click();
        await browser.pause(2000);
    }
}

module.exports = new HomePage();
