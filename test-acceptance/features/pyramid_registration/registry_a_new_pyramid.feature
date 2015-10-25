Feature: Registry a new pyramid
  In order to registry a new pyramid
  As a Client
  I want to registry a new pyramid

  Scenario: Registry a new pyramid successfully
    When I registry a new pyramid
    Then I will receive a response with status code 201
    And I will receive a response with an "id" field
