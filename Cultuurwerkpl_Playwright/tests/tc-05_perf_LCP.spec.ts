import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://decultuurwerkplaats.nl/');

  const LCP = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const LCP = entries.at(-1);
        resolve(LCP?.startTime);
      }).observe({
        type: 'largest-contentful-paint',
        buffered: true
      });
    });
  });

  console.log(parseInt(LCP as string, 10));
  
});
