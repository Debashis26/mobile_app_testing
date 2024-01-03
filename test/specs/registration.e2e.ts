// Import necessary modules from WebDriverIO
import { remote } from 'webdriverio';

// Configuration for WebDriverIO
const options = {
  capabilities: {
    platformName: 'Android',
    browserName: 'chrome',
    appium: {
      browserName: 'chrome',
    },
  },
  // Add other configurations as needed
};

const urlToOpen = '';


describe('Mobile App Test', () => {
  it('should open Chrome browser and navigate to a URL', async () => {
    const browser = await remote(options);
    await browser.url(urlToOpen);
    await browser.deleteSession();
  });
});
