Feature: Product Search
  As a user
  I want to search for products from the homepage
  So that I can find items I'm interested in

  Scenario Outline: User searches for a product and sees expected results
    Given I am on the home page
    When I enter "<product>" in the search bar and press Enter
    Then I should "<expectation>" for "<product>"

    Examples:
      | product     | expectation                      |
      | Hero Hoodie | see results                      |
      | eddd        | Your search returned no results. |





