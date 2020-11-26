/// <reference types="Cypress" />

import {Todos} from './todo_pageObjects'
const todoPage = new Todos()

describe('Filtering todos', () => {

    before(() => {     
        todoPage.navigate()   
        todoPage.addTodo('Voorbereiden Meetup')
        todoPage.addTodo('Demo Cypress geven')
        todoPage.addTodo('Slides en code beschikbaar stellen')
        
        todoPage.toggleTodo(1)
    })

    it('Filter "Active"', () => {
        todoPage.selectFilter('Active')
        todoPage.checkNumberOfItemsListed(2)
    })
    
    it('Filter "Completed"', () => {
        todoPage.selectFilter('Completed')
        todoPage.checkNumberOfItemsListed(1)
    })
    
    it('Filter "All"', () => {
        todoPage.selectFilter('All')
        todoPage.checkNumberOfItemsListed(3)
    })

})