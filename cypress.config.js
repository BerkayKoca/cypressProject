const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.trendyol.com',
    chromeWebSecurity: false,


    //Sayfa yükleme süresini artır
    pageLoadTimeout: 120000,   // 120 saniye

    //Trendyol gibi sitelerde status code hatalarını yok say
    defaultCommandTimeout: 15000,


    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push(
            '--disable-blink-features=AutomationControlled'
          );
          launchOptions.args.push(
            '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'
          );
        }
        return launchOptions;
      });
    },
  },
});

