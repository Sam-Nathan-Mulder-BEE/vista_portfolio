import { test, expect } from '@playwright/test';

// Apply slowMo to all tests in this file
test.use({
  launchOptions: {
    slowMo: 500,  // Waits 500ms between actions
    headless: false,  // Shows the browser window
  },
});


test('press tab 15 times', async ({ page }) => {
  await page.goto('https://decultuurwerkplaats.nl/');
  
  for (let i = 0; i < 30; i++) {
    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
  }
  await page.waitForTimeout(1000); 
});
  
