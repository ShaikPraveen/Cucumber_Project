$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GuruHomepage.feature");
formatter.feature({
  "line": 1,
  "name": "Testing conducted on GURU HOME PAGE",
  "description": "",
  "id": "testing-conducted-on-guru-home-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 24746220400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the Guru Home Page Login Functionality",
  "description": "",
  "id": "testing-conducted-on-guru-home-page;verify-the-guru-home-page-login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page of \"https://demo.guru99.com/v4/index.php\" guru website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter username \"mngr176855\" and password \"sEqAgUm\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click \"LOGIN\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should see Login home page along with welecome text",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Title should be \"Guru99 Bank Manager HomePage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click \"Log out\" link in Login Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.guru99.com/v4/index.php",
      "offset": 26
    }
  ],
  "location": "GuruHomepageSteps.i_am_on_the_home_page_of_guru_website(String)"
});
formatter.result({
  "duration": 48479683400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr176855",
      "offset": 16
    },
    {
      "val": "sEqAgUm",
      "offset": 42
    }
  ],
  "location": "GuruHomepageSteps.enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 7907056300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN",
      "offset": 7
    }
  ],
  "location": "GuruHomepageSteps.click_Button(String)"
});
formatter.result({
  "duration": 7286213800,
  "status": "passed"
});
formatter.match({
  "location": "GuruHomepageSteps.i_should_see_Login_home_page_along_with_welecome_text()"
});
formatter.result({
  "duration": 821159700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Guru99 Bank Manager HomePage",
      "offset": 17
    }
  ],
  "location": "GuruHomepageSteps.title_should_be(String)"
});
formatter.result({
  "duration": 11636700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 7
    }
  ],
  "location": "GuruHomepageSteps.click_link_in_Login_Page(String)"
});
formatter.result({
  "duration": 7948619000,
  "status": "passed"
});
formatter.after({
  "duration": 928275600,
  "status": "passed"
});
formatter.uri("GuruLoginDDT.feature");
formatter.feature({
  "line": 1,
  "name": "Data Driven Testing Conducted on Guru Website",
  "description": "",
  "id": "data-driven-testing-conducted-on-guru-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verifying Guru Login Functionality with Data Driven Testing",
  "description": "",
  "id": "data-driven-testing-conducted-on-guru-website;verifying-guru-login-functionality-with-data-driven-testing",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am  on the \"https://demo.guru99.com/v4/index.php\" Guru Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter valid or invalid usernames \"\u003cusername\u003e\" and passwords \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see My AccountId Number",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should see Images in Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click \"LOGIN\" button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click \"Log out\" link in LoginPage",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "data-driven-testing-conducted-on-guru-website;verifying-guru-login-functionality-with-data-driven-testing;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "data-driven-testing-conducted-on-guru-website;verifying-guru-login-functionality-with-data-driven-testing;;1"
    },
    {
      "cells": [
        "mngr176855",
        "sEqAgUm"
      ],
      "line": 15,
      "id": "data-driven-testing-conducted-on-guru-website;verifying-guru-login-functionality-with-data-driven-testing;;2"
    },
    {
      "cells": [
        "mngr176855",
        "sEqAgUm"
      ],
      "line": 16,
      "id": "data-driven-testing-conducted-on-guru-website;verifying-guru-login-functionality-with-data-driven-testing;;3"
    },
    {
      "cells": [
        "mngr176855",
        "sEqAgUm"
      ],
      "line": 17,
      "id": "data-driven-testing-conducted-on-guru-website;verifying-guru-login-functionality-with-data-driven-testing;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8427406200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verifying Guru Login Functionality with Data Driven Testing",
  "description": "",
  "id": "data-driven-testing-conducted-on-guru-website;verifying-guru-login-functionality-with-data-driven-testing;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am  on the \"https://demo.guru99.com/v4/index.php\" Guru Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter valid or invalid usernames \"mngr176855\" and passwords \"sEqAgUm\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see My AccountId Number",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should see Images in Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click \"LOGIN\" button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click \"Log out\" link in LoginPage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.guru99.com/v4/index.php",
      "offset": 14
    }
  ],
  "location": "GuruLoginDDT.i_am_on_the_Guru_Website(String)"
});
formatter.result({
  "duration": 36217246700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr176855",
      "offset": 34
    },
    {
      "val": "sEqAgUm",
      "offset": 61
    }
  ],
  "location": "GuruLoginDDT.enter_valid_or_invalid_usernames_and_passwords(String,String)"
});
formatter.result({
  "duration": 4806360400,
  "status": "passed"
});
formatter.match({
  "location": "GuruLoginDDT.i_should_see_My_AccountId_Number()"
});
formatter.result({
  "duration": 1427000,
  "status": "passed"
});
formatter.match({
  "location": "GuruLoginDDT.i_should_see_Images_in_Login_Page()"
});
formatter.result({
  "duration": 235400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN",
      "offset": 7
    }
  ],
  "location": "GuruLoginDDT.click_button(String)"
});
formatter.result({
  "duration": 9311601200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 7
    }
  ],
  "location": "GuruLoginDDT.click_link_in_LoginPage(String)"
});
formatter.result({
  "duration": 7815041000,
  "status": "passed"
});
formatter.after({
  "duration": 1206408100,
  "status": "passed"
});
formatter.before({
  "duration": 9678587800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verifying Guru Login Functionality with Data Driven Testing",
  "description": "",
  "id": "data-driven-testing-conducted-on-guru-website;verifying-guru-login-functionality-with-data-driven-testing;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am  on the \"https://demo.guru99.com/v4/index.php\" Guru Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter valid or invalid usernames \"mngr176855\" and passwords \"sEqAgUm\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see My AccountId Number",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should see Images in Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click \"LOGIN\" button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click \"Log out\" link in LoginPage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.guru99.com/v4/index.php",
      "offset": 14
    }
  ],
  "location": "GuruLoginDDT.i_am_on_the_Guru_Website(String)"
});
formatter.result({
  "duration": 37371307500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr176855",
      "offset": 34
    },
    {
      "val": "sEqAgUm",
      "offset": 61
    }
  ],
  "location": "GuruLoginDDT.enter_valid_or_invalid_usernames_and_passwords(String,String)"
});
formatter.result({
  "duration": 2927706100,
  "status": "passed"
});
formatter.match({
  "location": "GuruLoginDDT.i_should_see_My_AccountId_Number()"
});
formatter.result({
  "duration": 120000,
  "status": "passed"
});
formatter.match({
  "location": "GuruLoginDDT.i_should_see_Images_in_Login_Page()"
});
formatter.result({
  "duration": 143900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN",
      "offset": 7
    }
  ],
  "location": "GuruLoginDDT.click_button(String)"
});
formatter.result({
  "duration": 7978970900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 7
    }
  ],
  "location": "GuruLoginDDT.click_link_in_LoginPage(String)"
});
formatter.result({
  "duration": 6892673000,
  "status": "passed"
});
formatter.after({
  "duration": 1274550800,
  "status": "passed"
});
formatter.before({
  "duration": 10243127700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verifying Guru Login Functionality with Data Driven Testing",
  "description": "",
  "id": "data-driven-testing-conducted-on-guru-website;verifying-guru-login-functionality-with-data-driven-testing;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am  on the \"https://demo.guru99.com/v4/index.php\" Guru Website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter valid or invalid usernames \"mngr176855\" and passwords \"sEqAgUm\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should see My AccountId Number",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I should see Images in Login Page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click \"LOGIN\" button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click \"Log out\" link in LoginPage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.guru99.com/v4/index.php",
      "offset": 14
    }
  ],
  "location": "GuruLoginDDT.i_am_on_the_Guru_Website(String)"
});
formatter.result({
  "duration": 37151480100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr176855",
      "offset": 34
    },
    {
      "val": "sEqAgUm",
      "offset": 61
    }
  ],
  "location": "GuruLoginDDT.enter_valid_or_invalid_usernames_and_passwords(String,String)"
});
formatter.result({
  "duration": 13459305300,
  "status": "passed"
});
formatter.match({
  "location": "GuruLoginDDT.i_should_see_My_AccountId_Number()"
});
formatter.result({
  "duration": 103900,
  "status": "passed"
});
formatter.match({
  "location": "GuruLoginDDT.i_should_see_Images_in_Login_Page()"
});
formatter.result({
  "duration": 110400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN",
      "offset": 7
    }
  ],
  "location": "GuruLoginDDT.click_button(String)"
});
formatter.result({
  "duration": 7945509500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log out",
      "offset": 7
    }
  ],
  "location": "GuruLoginDDT.click_link_in_LoginPage(String)"
});
formatter.result({
  "duration": 6848582100,
  "status": "passed"
});
formatter.after({
  "duration": 1068643000,
  "status": "passed"
});
});