describe('Back-and-forth Navigation Testing of The Login Page', () => {
    
    it('Siteye git', () => {
        cy.visit('https://www.trendyol.com/', { failOnStatusCode: false });  //sayfayı ziyaret et cloudflare hatası için failOnStatusCode: false eklendi
        cy.contains('Tümünü Kabul Et').click(); //çerezleri kabul et
        cy.get('.user-login-container > .link > .link-text').click()  //giriş butonuna tıkla

        cy.wait(2000); //sayfanın yüklenmesi için bekle
        cy.go('back'); //geri git, trendyol anasayfasına dönecek  //eğer 2 sayfa geri dönmek isterseniz cy.go(-2) kullanabilirsiniz
        cy.title().should('eq', "En Trend Ürünler Türkiye'nin Online Alışveriş Sitesi Trendyol'da");  //başlık doğrulama
        cy.url().should('eq', 'https://www.trendyol.com/');  //url doğrulama

        cy.wait(2000); //sayfanın yüklenmesi için bekle
        cy.go('forward'); //ileri git, login sayfasına dönecek  //eğer 2 sayfa ileri gitmek isterseniz cy.go(2) kullanabilirsiniz
        cy.title().should('eq', '');  //başlık doğrulama
        cy.url().should('eq', 'https://www.trendyol.com/giris?cb=%2F');  //url doğrulama
    });

});