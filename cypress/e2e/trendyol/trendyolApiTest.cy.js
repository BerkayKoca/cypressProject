describe('Trendyol API Test', () => {

  it("trendyolTest.cy.js ilk api'nin testi", () => {

    cy.request('https://apigw.trendyol.com/discovery-sfint-checkout-service/sidebar-basket/?__renderMode=stream&if=false&storefrontId=1&language=tr&tld=.com&countryCode=TR&channelId=1')
    .its('status')
    .should('eq', 200);

  });
  
});
            