Feature: Data Driven Testing Conducted on Guru Website

Scenario Outline: Verifying Guru Login Functionality with Data Driven Testing
Given I am  on the "https://demo.guru99.com/v4/index.php" Guru Website
When  Enter valid or invalid usernames "<username>" and passwords "<password>"
Then  I should see My AccountId Number
Then  I should see Images in Login Page
And   Click "LOGIN" button
And   Click "Log out" link in LoginPage


Examples: 

      |username   |password|
      |mngr176855 |sEqAgUm |
      |mngr176855 |sEqAgUm |
      |mngr176855 |sEqAgUm |
      
     
      
      