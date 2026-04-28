import { test, expect } from '@playwright/test';

test.use({
  launchOptions: {
    slowMo: 500,  // Waits 500ms between actions
    headless: false,  // Shows the browser window
  },
});

test('press tab 15 times', async ({ page }) => {
  await page.goto('https://decultuurwerkplaats.nl/');
  await page.locator('body').press('Tab');
  await page.getByRole('menuitem', { name: '⌂' }).press('Tab');
  await page.getByRole('menuitem', { name: 'Blog' }).press('Tab');
  await page.getByRole('menuitem', { name: 'Ruimtes' }).press('Tab');
  await page.getByRole('menuitem', { name: 'Overzicht' }).press('Tab');
  await page.getByRole('menuitem', { name: 'Boek een ruimte' }).press('Enter');
  await page.waitForURL('https://decultuurwerkplaats.nl/boekeenruimte/');
    
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press('Tab');
  }
  await page.waitForTimeout(1000); 
});