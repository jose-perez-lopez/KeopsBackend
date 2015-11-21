Feature: Delete pyramid
  In order to delete a pyramid
  As a Client
  I want to delete a pyramid
@only
  Scenario: Delete a pyramid
    Given there is a pyramid already registered
    When I delete the pyramid
    And I retrieve the pyramid data
    Then I will receive a response with status code 404
