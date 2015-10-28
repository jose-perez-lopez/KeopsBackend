Feature: Check a pyramid levels statuses
  In order to get the levels statuses of a pyramid
  As a Client
  I want to get the levels statuses of a pyramid

  Scenario: Get pyramid levels status
    Given There is a pyramid already registered with an id 99
    Given the status of the levels of the pyramid with id 99 are
      | 0 | 1 |
      | 1 | 0 |
      | 2 | 1 |
    When I check for the statuses of the pyramyd 99
    Then I will receive a response with status code 201
    And I will receive a response {status:[1,0,1]}
