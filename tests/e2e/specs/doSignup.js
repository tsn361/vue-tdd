// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    //cy.contains('h1', 'Sign Up')
    cy.get('input[id=username]').type("aimraj")
    cy.get('input[id=email]').type("tsn361@gmail.com")
    cy.get('input[id=password]').type("admin123")
    cy.get('input[id=cpassword]').type("admin123")
    cy.get('button[id=signup]').click()
  })
})
