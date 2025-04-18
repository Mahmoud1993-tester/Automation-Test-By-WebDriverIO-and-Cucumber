Feature: Add to Cart
  As a user
  I want to add products to my cart
  So that I can purchase them later

  Scenario Outline: User adds a product to the cart from the search results
    Given I am on the home page
    When I enter "<product>" in the search bar and press Enter
    And I click on the product from search results
    And I click on "Add to cart" button
    Then I should see the product "<product>" added to the cart

    Examples:
      | product      |
      | Hero Hoodie  |
      | T-Shirt Blue |
