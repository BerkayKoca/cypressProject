describe('Category Click Test', () => {
    Cypress.on('uncaught:exception', () => false);
    it('siteye git', () => {
        cy.visit('https://www.trendyol.com/', { failOnStatusCode: false })  //sayfayı ziyaret et cloudflare hatası için failOnStatusCode: false eklendi
        cy.contains('Tümünü Kabul Et').click() //çerezleri kabul et
    })
    
    it('Katagoriler click test', () => {
        cy.get('a[href="/butik/liste/1/kadin"]').click()
        cy.contains('Tümünü Kabul Et').click()
        cy.wait(2000)
        cy.get('a[href="/butik/liste/2/erkek"]').click()
        cy.wait(2000)
        cy.get('a[href="/butik/liste/3/anne-cocuk"]').click()
        cy.wait(2000)
        cy.get('a[href="/butik/liste/12/ev-yasam"]').click()
        cy.wait(2000)
        cy.get('a[href="/butik/liste/16/supermarket"]').click()
        cy.wait(2000)
        cy.get('a[href="/butik/liste/11/kozmetik"]').click()
        cy.wait(2000)
        cy.get('a[href="/butik/liste/9/ayakkabi-canta"]').click()
        cy.wait(2000)
        cy.get('a[href="/butik/liste/5/elektronik"]').click()
        cy.wait(2000)
        cy.get('a[href="/cok-satanlar?type=bestSeller&webGenderId=1"]').click()
        cy.wait(2000)
        cy.get('a[href="/flas-indirimler"]').click()
    });

});