export class Todos {
    
    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addTodo(item) {
        cy.get('.new-todo').type(item+'{enter}')
    }

    selectFilter(filter) {
        cy.contains(filter).click()
    }

    toggleTodo(position) {
        cy.get('.todo-list > li:nth-child(' + position + ') .toggle').click()
    }

    checkNumberOfItemsListed(number) {
        cy.get('.todo-list > li').should('have.length', number)
    }
}