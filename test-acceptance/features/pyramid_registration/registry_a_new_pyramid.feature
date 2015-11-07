Feature: Registry a new pyramid
  In order to registry a new pyramid
  As a Client
  I want to registry a new pyramid

  Scenario: Registry a new pyramid successfully
    When I registry a new pyramid
    Then I will receive a response with status code 201
    And I will receive a response with an "id" field


  Scenario: Retrieve default data of a registered pyramid
    Given there is a pyramid already registered
    When I retrieve the pyramid data
    Then I will receive the following data
      | id | status |
      | 1  | 1,1,1  |