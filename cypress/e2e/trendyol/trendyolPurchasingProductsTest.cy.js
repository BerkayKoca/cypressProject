describe('Back-and-forth Navigation Testing of The Login Page', () => {
    
    it('Siteye git', () => {
        cy.visit('https://www.trendyol.com/', { failOnStatusCode: false });  //sayfayı ziyaret et cloudflare hatası için failOnStatusCode: false eklendi
        cy.contains('Tümünü Kabul Et').click(); //çerezleri kabul et
    });

     it('Ayakkabı ürününü arat', () => {
        cy.wait(2000);
        cy.get('#suggestions').type('ayakkabı')  //arama çubuğuna "ayakkabı" yaz
        cy.get('.ft51BU2r').click();  //arama butonuna tıkla
    });

    it('Ürün seç, sepete ekle ve onayla', () => {
        cy.get('#736020359').click(); //ürüne tıkla   
        cy.visit('https://www.trendyol.com/puma/rbd-game-low-jr-sneaker-p-701877304?boutiqueId=680490&merchantId=968')
        cy.get('.buy-now-button-text').click();  //ürünü sepete ekle
        cy.get('.p-button-wrapper p-primary p-large p-fluid checkout-button').click();  //sepeti onayla

        cy.wait(2000); //sayfanın yüklenmesi için bekle

        cy.get('.no-account-modal-content-buttons-button').click();  //üye olmadan devam et 
    });

});