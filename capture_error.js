import { chromium } from 'playwright';
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push('PAGE ERROR: ' + err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push('CONSOLE ERROR: ' + msg.text());
  });
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(2000);
  console.log(JSON.stringify(errors, null, 2));
  await browser.close();
})();
