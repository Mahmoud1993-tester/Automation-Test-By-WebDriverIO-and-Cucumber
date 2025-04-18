class HomePage {
    // Search bar input field
    get searchInput() {
        return $('#search');
    }

    // All results displayed after search (valid case)
    get searchResults() {
        return $$('.product-item');
    }

    // Message shown when no products are found (invalid case)
    get noResultsMessage() {
        return $('.message.notice');
    }


    // Open the home page
    async open() {
        await browser.url('https://magento.softwaretestingboard.com/');
        await this.searchInput.waitForDisplayed({ timeout: 5000 });
    }
}

module.exports = new HomePage();
