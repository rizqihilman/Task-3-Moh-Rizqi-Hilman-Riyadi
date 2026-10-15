// Temporary probe: verify saucedemo selectors and exact checkout values.
const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const out = {};

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL(/inventory\.html/);
  out.title = await page.locator('[data-test="title"]').textContent();
  out.inventoryCount = await page.locator('[data-test="inventory-item"]').count();

  const item = page.locator('[data-test="inventory-item"]').filter({ hasText: 'Sauce Labs Onesie' });
  out.onesieCount = await item.count();
  out.onesieName = await item.locator('[data-test="inventory-item-name"]').textContent();
  out.onesiePrice = await item.locator('[data-test="inventory-item-price"]').textContent();
  out.addBtnTestId = await item.locator('button').getAttribute('data-test');
  out.addBtnText = await item.locator('button').textContent();

  await item.locator('button').click();
  out.cartBadge = await page.locator('[data-test="shopping-cart-badge"]').textContent();

  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.waitForURL(/cart\.html/);
  out.cartTitle = await page.locator('[data-test="title"]').textContent();
  out.cartItems = await page.locator('[data-test="inventory-item"]').count();
  out.cartName = await page.locator('[data-test="inventory-item-name"]').textContent();
  out.cartQty = await page.locator('[data-test="item-quantity"]').textContent();
  out.cartPrice = await page.locator('[data-test="inventory-item-price"]').textContent();

  await page.locator('[data-test="checkout"]').click();
  await page.waitForURL(/checkout-step-one\.html/);
  out.stepOneTitle = await page.locator('[data-test="title"]').textContent();
  await page.locator('[data-test="firstName"]').fill('QA');
  await page.locator('[data-test="lastName"]').fill('Tester');
  await page.locator('[data-test="postalCode"]').fill('12345');
  await page.locator('[data-test="continue"]').click();

  await page.waitForURL(/checkout-step-two\.html/);
  out.stepTwoTitle = await page.locator('[data-test="title"]').textContent();
  out.overviewItems = await page.locator('[data-test="inventory-item"]').count();
  out.overviewName = await page.locator('[data-test="inventory-item-name"]').textContent();
  out.paymentInfo = await page.locator('[data-test="payment-info-value"]').textContent();
  out.shippingInfo = await page.locator('[data-test="shipping-info-value"]').textContent();
  out.subtotal = await page.locator('[data-test="subtotal-label"]').textContent();
  out.tax = await page.locator('[data-test="tax-label"]').textContent();
  out.total = await page.locator('[data-test="total-label"]').textContent();

  await page.locator('[data-test="finish"]').click();
  await page.waitForURL(/checkout-complete\.html/);
  out.completeTitle = await page.locator('[data-test="title"]').textContent();
  out.completeHeader = await page.locator('[data-test="complete-header"]').textContent();
  out.completeText = await page.locator('[data-test="complete-text"]').textContent();
  out.cartBadgeAfter = await page.locator('[data-test="shopping-cart-badge"]').count();

  console.log(JSON.stringify(out, null, 2));
  await browser.close();
})();
