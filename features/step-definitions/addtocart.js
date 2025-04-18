const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../pageobjects/homepageforCart');
const ProductPage = require('../pageobjects/productpage');
const CartPage = require('../pageobjects/cartpageaddtoCart');
const { expect } = require('chai');


Given(/^I am on the home page$/, async() => {
	await HomePage.open();
});

When(/^I enter "([^"]*)" in the search bar and press Enter$/, async(product) => {
	await HomePage.searchForProduct(product);
});

When(/^I click on the product from search results$/, async() => {
	await HomePage.clickFirstResult();
});

When(/^I click on "([^"]*)" button$/, async() => {
	await ProductPage.addToCart();
});

Then(/^I should see the product "([^"]*)" added to the cart$/, async(product) => {
	const result = await CartPage.isProductInCart(product);
    expect(result).to.be.true;
});
