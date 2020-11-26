*** Settings ***
Library  SeleniumLibrary

*** Test Cases ***
Filtering todo-items
    [Setup]  Openen todo-mvc website
    Aanmaken todo-items     Meetup voorbereiden
    ...                     Demo Cypress geven
    ...                     Slides en code beschikbaar stellen
    Afstrepen todo-item     Demo Cypress geven
    Selecteer filter en contoleer aantal items  Completed   1
    Selecteer filter en contoleer aantal items  Active      2
    Selecteer filter en contoleer aantal items  All         3
    [Teardown]  Sluiten todo-mvc website

*** Keywords ***
Aanmaken todo-items
    [Arguments]  @{lijst_todo_items}
    FOR  ${todo_item}  IN  @{lijst_todo_items}
        input text  css:.new-todo  ${todo_item}
        press keys  css:.new-todo  RETURN
    END

Afstrepen todo-item
    [Arguments]  ${todo-item}
    click element  xpath://label[text()='${todo-item}']//preceding-sibling::input

Openen todo-mvc website
    open browser  about:blank  chrome
    maximize browser window
    go to  http://todomvc-app-for-testing.surge.sh/

Selecteer filter en contoleer aantal items
    [Arguments]  ${filter}  ${verwacht_aantal_items}
    click element  xpath://ul[@class='filters']//a[text()='${filter}']
    ${aantal_items}  get element count  xpath://ul[@class='todo-list']/li
    should be equal as integers  ${aantal_items}  ${verwacht_aantal_items}
    ...  Onjuist aantal todo-items gevonden icm filter

Sluiten todo-mvc website
    close browser
