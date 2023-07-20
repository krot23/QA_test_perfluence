describe('Authorize', () => {
    it('Test_auth', () => {
        cy.visit('https://dash14.prfl.tech/site/login')
        cy.get('input[type="text"]').type('test_perfluence@fexpost.com')
        cy.get('input[type="password"]').type('Perfluence23')
        cy.get('div[class="recaptcha-checkbox-border"]').click()
        cy.get('button[type="submit"]').click()
    })
})