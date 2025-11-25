describe('Click Test', () => {
    Cypress.on('uncaught:exception', () => false);
    it('siteye git', () => {
        cy.visit('https://www.trendyol.com/', { failOnStatusCode: false })  //sayfayı ziyaret et cloudflare hatası için failOnStatusCode: false eklendi
        cy.contains('Tümünü Kabul Et').click() //çerezleri kabul et
    })

    it('İndirim Kuponlarım click test', () => {
        cy.get('.right > :nth-child(1) > a').click()
        cy.wait(2000)
        cy.go('back')
        cy.get(':nth-child(1) > .gender-card > .gender-card-action > .modal-action-button').click()
    });

    it("Trendyol'da Satış Yap click test", () => {
        cy.get('.right > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.go('back')
        cy.get(':nth-child(1) > .gender-card > .gender-card-action > .modal-action-button').click()
    });

    it('Hakkımızda click test', () => {
        cy.get('.right > :nth-child(3) > a').click() 
        cy.wait(2000)
        cy.go('back')
    });

    it('Yardım ve Destek click test', () => {
        cy.get('.right > :nth-child(4) > a').click()
        cy.wait(2000)
        cy.go('back')
    });

    it('Giriş Yap click test', () => {
        cy.get('.user-login-container > .link > .link-text').click()
        cy.wait(2000)
        cy.go('back')
        cy.get(':nth-child(1) > .gender-card > .gender-card-action > .modal-action-button').click()
    });

    it('Favorilerim click test', () => {
        cy.get('.account-favorites > .link > .link-text').click()
        cy.wait(2000)
        cy.go('back')
        cy.get(':nth-child(1) > .gender-card > .gender-card-action > .modal-action-button').click()
    });

    it('Sepetim click test', () => {
        cy.get('.basket-preview > .link > .link-text').click()
        cy.wait(2000)
        cy.go('back')
    });

});