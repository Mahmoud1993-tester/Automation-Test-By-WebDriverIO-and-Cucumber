class HomePage {
    get searchInput() { return $('#search'); }
    get searchResults() { return $$('.product-item'); }

    async open() {
        await browser.url('/');
    }

    async searchForProduct(product) {
        await this.searchInput.setValue(product);
        await browser.keys('Enter');
        await browser.pause(1000);
    }

    async clickFirstResult() {
        const results = await this.searchResults;
        if (results.length > 0) {
            await results[0].click();
        }
    }
}

module.exports = new HomePage();
