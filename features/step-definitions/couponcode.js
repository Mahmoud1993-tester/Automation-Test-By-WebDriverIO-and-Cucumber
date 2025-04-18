const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../pageobjects/homepageforCouponCode');
const { expect } = require('chai');


Given(/^I am on the home page$/, async(product) => {
	await HomePage.open();
    await HomePage.searchAndAddToCart(product);
});

Then(/^I add (.*) to the cart$/, async(product) => {
	await HomePage.searchInput.setValue(product);
    await browser.keys('Enter');
    await browser.pause(1000);
    await HomePage.productAddToCart.click();
    await browser.pause(1000);


});

When(/^I view the cart$/, async() => {
	await HomePage.viewCartButton.click();
    await browser.pause(1000);
});

When(/^I apply coupon code (.*)$/, async(coupon) => {
	await HomePage.clickCuponLink.click();
    await HomePage.couponInput.setValue(coupon);
    await HomePage.applyCouponButton.click();
    await browser.pause(1000);


});

Then(/^I should see (.*)"$/, async(message ) => {
	let successVisible = await HomePage.successMessage.isDisplayed();
	let errorVisible = await HomePage.errorMessage.isDisplayed();

    if (successVisible) {
        const actualMessage = await HomePage.successMessage.getText();
        expect(actualMessage).to.include(message);
    } else if (errorVisible) {
       const actualMessage = await HomePage.errorMessage.getText();
       expect(actualMessage).to.include(message);
    } else {
        throw new Error ('No success or error message displayed!');
    }
});
