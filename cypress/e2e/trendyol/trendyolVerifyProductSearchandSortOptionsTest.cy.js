describe('Verify Product Search and Sort Options', () => {
    
    it('Siteye git', () => {
        cy.visit('https://www.trendyol.com/', { failOnStatusCode: false });  //sayfayı ziyaret et cloudflare hatası için failOnStatusCode: false eklendi
        cy.contains('Tümünü Kabul Et').click(); //çerezleri kabul et
    });

    it('Kalem ürününü arat', () => {
        cy.get('#suggestions').type('kalem')  //arama çubuğuna "kalem" yaz
        cy.get('.ft51BU2r').click();  //arama butonuna tıkla
    });

    it('Sırala kısmını ve çalıştığını doğrulama', () => {
        cy.get('.select-box').click() 
        cy.wait(2000);

        const siralamaSecenekleri = ['Önerilen Sıralama', 'En Düşük Fiyat', 'En Yüksek Fiyat', 'En Yeniler', 'En Çok Satan', 'En Favoriler', 'En Çok Değerlendirilen'];

        siralamaSecenekleri.forEach((secenek) => {
            cy.get('.select-dropdown') //7 sıralama seçeneğini aç
                .contains(secenek) //her bir sıralama seçeneğini kontrol et
                .should('be.visible') //görünür olduğunu doğrula
                .then(() => { //her bir seçenek için sırayla yap
                    cy.log('"${secenek}" seçeneği görünür durumda.'); //seçeneğin görünür olduğunu logla
                });
        });       
    });
    
});
