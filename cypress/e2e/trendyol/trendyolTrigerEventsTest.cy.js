describe('Trendyol Triger Events Test', () => {

    it('siteye git', () => {
        cy.visit('https://www.trendyol.com/', { failOnStatusCode: false });  //sayfayı ziyaret et cloudflare hatası için failOnStatusCode: false eklendi
        cy.contains('Tümünü Kabul Et').click(); //çerezleri kabul et
    })

     it('Tüm Katagoriler test', () => {
        cy.get('.side-menu-button > p').trigger('mouseover') //Tüm Katagoriler butonuna mouseover eventi tetikleme
        cy.wait(2000)
    });    

})