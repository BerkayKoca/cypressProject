const { faker } = require('@faker-js/faker');

let fakeEmail = faker.internet.email();
let fakePassword = faker.internet.password();

describe('Sahte giriş denemesi', () => {
    
    it('Sahte kullanıcı bilgileriyle giriş denemesi', () => {
        cy.visit('https://www.trendyol.com/', { failOnStatusCode: false });
        cy.contains('Tümünü Kabul Et').click();

        cy.get('.user-login-container > .link > .link-text').click()  //giriş butonuna tıkla

        cy.get('[data-testid="email-input"]').type(fakeEmail)
        cy.get('[data-testid="password-input"]').type(fakePassword)
        cy.get('.q-primary').click(); //giriş yap alanına tıkla

    });

});