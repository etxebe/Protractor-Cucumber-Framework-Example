#features/test.feature
Feature: Homepage

    Scenario: Verify url address
      Given I go to Protractor Workshop site
      Then I should see the correct url address

    @temp
    Scenario: Verify the title
      Given I go to Protractor Workshop site
      Then I should see the correct title

    Scenario: Verify the homepage headline
      Given I am on the homepage
      Then I should see the correct headline

    Scenario: Verify the main menu
      Given I am on the homepage
      Then I should see five main menu items

    Scenario: Verify that links in menu options are correct
      Given I am on the homepage
      Then Menu options should have correct links

    Scenario: About menu should have three dropdown options
      Given I am on the homepage
      Then About menu should have three options

    Scenario: Click company menu
      Given I am on the homepage
      When I click company menu
      Then I should see appropriate header 'About us'

    Scenario: Click history dropdown menu
      Given I am on the homepage
      When I click history menu
      Then I should see appropriate header 'About us'

    Scenario: Click contact menu
      Given I am on the homepage
      When I click contact menu
      Then I should see header 'Contact'

    Scenario: Click blog menu
      Given I am on the homepage
      When I click blog option menu
      Then I should see header 'Blog'

    Scenario: Click services menu
      Given I am on the homepage
      When I click services option menu
      Then I should see header 'Services'

    Scenario: Features sections check
      Given I am on the homepage
      Then I should see three feature headlines

    Scenario: Features sections check v2
      Given I am on the homepage
      Then I should see correct feature images and links