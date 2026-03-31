const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://rahulshettyacademy.com/client');
  await page.fill('[placeholder="email@example.com"]', 'praveenloka6666@gmail.com');
  await page.fill('[placeholder="Password"]', 'Rahul@1234');
  await page.click('button:has-text("Login")');
  await page.waitForURL('**/dashboard');
  await page.waitForTimeout(3000);
  const cartButton = await page.$('button:has-text("Cart")');
  console.log('cartButton', !!cartButton);
  await page.click('button:has-text("Cart")');
  await page.waitForURL('**/dashboard/cart');
  await page.waitForTimeout(3000);
  const html = await page.content();
  console.log(html.slice(0, 8000));
  await browser.close();
})();
