Feature: Automate Various Types of Web Element Interaction

    Automate Various Types of Web Element Interaction, such as checkboxes, dropdowns etc. on the practice page

    Scenario: Tick and untick checkboxes
    Given I am on the the practice page
    When I tick checkbox1 and checkbox2
    And untick checkbox1
    Then only checkbox2 should be ticked

   
    
    

