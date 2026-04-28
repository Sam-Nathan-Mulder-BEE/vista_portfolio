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
  await page.locator('body').press('Tab');
  await page.getByRole('menuitem', { name: '⌂' }).press('Tab');
  await page.getByRole('menuitem', { name: 'Blog' }).press('Tab');
  await page.getByRole('menuitem', { name: 'Ruimtes' }).press('Tab');
  await page.getByRole('menuitem', { name: 'Overzicht' }).press('Tab');
  await page.getByRole('menuitem', { name: 'Boek een ruimte' }).press('Tab');
  await page.getByRole('menuitem', { name: 'De Bovenkamer' }).press('Tab');
  await page.getByRole('menuitem', { name: 'De Uitvinderij' }).press('Tab');
  await page.getByRole('menuitem', { name: 'The Write Place' }).press('Tab');
  await page.getByRole('menuitem', { name: 'Open Atelier' }).press('Tab');
  await page.getByRole('menuitem', { name: 'Lid worden' }).press('Enter');
  await page.waitForURL('https://decultuurwerkplaats.nl/open-atelier/lid-worden/');
    
  for (let i = 0; i < 30; i++) {
    await page.keyboard.press('Tab');
  }
  await page.waitForTimeout(1000); 
});