describe('Trendol Test', () => {
    
    it('Siteye git ve doğrula', () => {
        cy.visit('https://www.trendyol.com/', { failOnStatusCode: false });  //sayfayı ziyaret et cloudflare hatası için failOnStatusCode: false eklendi
        cy.contains('Tümünü Kabul Et').click(); //çerezleri kabul et
        cy.title().should('eq', "En Trend Ürünler Türkiye'nin Online Alışveriş Sitesi Trendyol'da");  //başlık doğrulama
        cy.url().should('eq', 'https://www.trendyol.com/');  //url doğrulama
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');  //sayfa karakter seti doğrulama
    });

});