import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/homepage'; 
import { expect } from 'chai';

Given(/^I am on the home page$/, async () => {
    await HomePage.open(); 
});

When(/^I enter (.*) in the search bar and press Enter$/, async (product) => {
    await HomePage.searchInput.setValue(product);  
    await browser.keys('Enter');  
    await HomePage.searchResults.waitForDisplayed({ timeout: 5000 });
});

Then(/^I should (.*) for (.*)$/, async (expectation, product) => {
    const results = await HomePage.searchResults;  
    const noResultsText = await HomePage.noResultsMessage.getText();  

    if (expectation === 'see results') {
        expect(results.length).to.be.greaterThan(0);  
        for (const result of results) {
            const text = await result.getText(); 
            expect(text.toLowerCase()).to.include(product.toLowerCase());  
        }
    } else if (expectation === 'see no search results') {
        expect(results.length).to.equal(0);  
        expect(noResultsText.toLowerCase()).to.include('your search returned no results.'); 
    } else {
        throw new Error(`Unknown expectation: ${expectation}`);  
    }
});
