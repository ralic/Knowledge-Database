Feature: Get the website accupass title

  Scenario: Get title of website
    Given I go on the website "http://www.accupass.com/"
    When I use getTitle to get the title of this website
    Then the command should return "Accupass x active your life with events / Funnest event platform."

  Scenario: Go to page login
    Given I go on the website "http://www.accupass.com/"
    When I click the login button and use isExisting to get the login input text
    Then login page should return "true"