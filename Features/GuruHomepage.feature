Feature: Testing conducted on GURU HOME PAGE

  Scenario: Verify the Guru Home Page Login Functionality
    Given I am on the home page of "https://demo.guru99.com/v4/index.php" guru website
    When  Enter username "mngr176855" and password "sEqAgUm"
    And   Click "LOGIN" Button
    Then  I should see Login home page along with welecome text
    Then  Title should be "Guru99 Bank Manager HomePage"
    And   Click "Log out" link in Login Page
