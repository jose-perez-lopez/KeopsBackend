Feature: Get all pyramids registered
  In order to get all pyramids registered
  As a Client
  I want to get all pyramids registered

  Scenario: Get all pyramids current data
    Given there are two pyramids already registered
    When I retrieve all pyramids registered data
    Then I will receive the following data
    |id|status|
    |1 |1,1,1 |
    |2 |1,1,1 |


