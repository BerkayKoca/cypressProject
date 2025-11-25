describe('Trendyol URL Test', () => {

    it('siteye git', () => {
        cy.visit('https://www.trendyol.com/', { failOnStatusCode: false });  //sayfayı ziyaret et cloudflare hatası için failOnStatusCode: false eklendi
        cy.contains('Tümünü Kabul Et').click(); //çerezleri kabul et
    })

    it('Protokolu doğrula', () => {
        cy.location('protocol').should('eq', 'https:') //protokol doğrulama
    })

    it('Hostname doğrula', () => {
        cy.location('hostname').should('eq', 'www.trendyol.com') //hostname doğrulama
    })

    it('Giriş yap tıkla pathname doğrula', () => {
        cy.contains('Giriş Yap').should('be.visible').click() //demolar butonuna tıkla //cy.get() da kullanılabilir css selector ile
        cy.location('pathname').should('eq', '/giris') //pathname doğrulama
    })

})
