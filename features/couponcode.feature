Feature: Apply Coupon Code
  As a user
  I want to apply a discount coupon during checkout
  So that I can receive a discount on my purchase

  Scenario Outline: User applies a coupon code at checkout
    Given I am on the home page
    And I add "<product>" to the cart
    When I view the cart
    And I apply coupon code "<coupon>"
    Then I should see "<message>"

    Examples:
      | product     | coupon     | message                      |
      | Hero Hoodie | DISCOUNT10 | Coupon applied successfully! |
      | Hero Hoodie | INVALID123 | Invalid coupon code.         |
