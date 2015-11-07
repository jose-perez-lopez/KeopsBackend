Feature: Set statuses of a pyramid
  In order to set the statuses of a pyramid
  As a Client
  I want to set the statuses of a pyramid

  Scenario: Set statuses of a pyramid
    Given there is a pyramid already registered
    When I set the statuses of the pyramid as
      | status |
      | 0,1,0  |
    And I retrieve the pyramid data
    Then I will receive the following data
      | id | status |
      | 1  | 0,1,0  |
