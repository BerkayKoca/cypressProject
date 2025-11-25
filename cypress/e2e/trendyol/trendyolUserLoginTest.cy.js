describe('Trendol User Login Test', () => {
    
    it('Siteye git', () => {
        cy.visit('https://www.trendyol.com/', { failOnStatusCode: false });  //sayfayı ziyaret et cloudflare hatası için failOnStatusCode: false eklendi
        cy.contains('Tümünü Kabul Et').click(); //çerezleri kabul et
    });

    it('Trendyol başarısız login testi', () => {
        cy.get('.user-login-container > .link > .link-text').click()  //giriş butonuna tıkla
        cy.title().should('eq', '');  //başlık doğrulama
        cy.url().should('eq', 'https://www.trendyol.com/giris?cb=%2F');  //url doğrulama
        cy.contains('Tümünü Kabul Et').click(); //çerezleri kabul et
        cy.get('[data-testid="email-input"]').type('maildeneme')
        cy.get('[data-testid="password-input"]').type('sifredeneme')
        cy.get('.q-primary').click(); //giriş yap alanına tıkla
        cy.scrollTo('top');
        cy.wait(4000);
        cy.get('.message')  //hata mesajını doğrula
    });

    it('Trendyol başarılı login testi', () => {
        cy.get('[data-testid="email-input"]').clear().type('trendyol_deneme@hotmail.com')  //geçerli mail
        cy.get('[data-testid="password-input"]').clear().type('Deneme1234')  //geçerli şifre
        cy.get('.q-primary').click();  //giriş yap alanına tıkla  //giriş trendyolun güvenlik önlemleri nedeniyle engellenebilir ve 403 hatası alınabilir
        cy.scrollTo('top');
   });
   
});