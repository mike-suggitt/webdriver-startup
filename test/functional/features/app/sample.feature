Feature:
  As a developer
  I want to run acceptance tests
  So that my code is lovely

  @one @nophantom
  Scenario: Run a sample test one
    Given I navigate to "http://www.google.co.uk"
    And I set the viewport to "1024" by "768"
    When I set the "google-search-box" input value to "potravinydomov"
    And I click the "google-search-button"
    And I wait 1 second
    Then I should see "google-search-result-item" at least "2" times

  @two
  Scenario: Run a sample test two
    Given I navigate to "http://www.bbc.co.uk/news"
    And I set the viewport to "1024" by "768"
    Then I should expect "bbc-main-story-title" text to "equal" "French PM booed at Nice commemoration"