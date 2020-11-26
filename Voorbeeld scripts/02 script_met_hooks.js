/// <reference types="Cypress" />

describe('Filtering todos', () => {

    before(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        cy.get('.new-todo').type('Voorbereiden Meetup{enter}')
        cy.get('.new-todo').type('Demo Cypress geven{enter}')
        cy.get('.new-todo').type('Slides en code beschikbaar stellen{enter}')
        
        cy.get('.todo-list > li:nth-child(3) .toggle').click()
    })

    it('Filter "Active"', () => {
        cy.contains('Active').click()
        cy.get('.todo-list > li').should('have.length', 2)
    })
    
    it('Filter "Completed"', () => {
        cy.contains('Completed').click()
        cy.get('.todo-list > li').should('have.length', 1)
    })
    
    it('Filter "All"', () => {
        cy.contains('All').click()
        cy.get('.todo-list > li').should('have.length', 3)
    })

})